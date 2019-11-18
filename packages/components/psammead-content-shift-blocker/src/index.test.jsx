/* eslint-disable no-underscore-dangle */

import React from 'react';
import { render, act } from '@testing-library/react';
import styled from 'styled-components';
import ContentShiftBlocker from '.';

let IOInstance;
let ROInstance;

beforeEach(() => {
  IOInstance = null;
  ROInstance = null;

  delete global.CSS; // delete our mocked CSS.supports API so the scroll adjustment logic is the default behaviour

  global.IntersectionObserver = callback => {
    // return a mock instance and store it globally so we can fire the callback to simulate an intersection event
    IOInstance = {
      observe: jest.fn(),
      disconnect: jest.fn(),
      fireIntersectEvent: callback,
    };
    return IOInstance;
  };

  global.ResizeObserver = callback => {
    // return a mock instance and store it globally so we can fire the callback to simulate a resize event
    ROInstance = {
      observe: jest.fn(),
      disconnect: jest.fn(),
      fireResizeEvent: callback,
    };
    return ROInstance;
  };

  // mock scrollHeight - not supported in jsdom
  Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
    configurable: true,
    get() {
      return this._scrollHeight;
    },
    set(val) {
      this._scrollHeight = val;
    },
  });

  global.pageYOffset = 300; // set the scroll Y position to an arbitrary number (slightly scrolled down)

  document.body.scrollHeight = 5000; // set the default height of the document
});

afterEach(jest.clearAllMocks);

global.scrollTo = jest.fn((x, y) => {
  global.pageYOffset = y;
});

const Content = styled.div`
  height: 100px;
  width: 100px;
`;

it('should render children', () => {
  const { getByText } = render(
    <ContentShiftBlocker>
      <Content>Test content</Content>
    </ContentShiftBlocker>,
  );

  expect(getByText('Test content')).toBeTruthy();
});

it('should accept string measurements', () => {
  const stringSize = '10em';
  const { container } = render(
    <ContentShiftBlocker initialWidth={stringSize} initialHeight={stringSize}>
      <Content />
    </ContentShiftBlocker>,
  );

  expect(
    getComputedStyle(container.firstChild).getPropertyValue('width'),
  ).toEqual(stringSize);

  expect(
    getComputedStyle(container.firstChild).getPropertyValue('height'),
  ).toEqual(stringSize);
});

it('should not resize when in view', () => {
  const initialSize = 100;
  const sizeIncrease = 100;
  const { container } = render(
    <ContentShiftBlocker initialWidth={initialSize} initialHeight={initialSize}>
      <Content />
    </ContentShiftBlocker>,
  );

  // check initial size
  expect(
    getComputedStyle(container.firstChild).getPropertyValue('width'),
  ).toEqual(`${initialSize}px`);

  expect(
    getComputedStyle(container.firstChild).getPropertyValue('height'),
  ).toEqual(`${initialSize}px`);

  act(() => {
    IOInstance.fireIntersectEvent([
      {
        isIntersecting: true, // is in view
        boundingClientRect: {
          height: initialSize,
          width: initialSize,
        },
      },
    ]);
    ROInstance.fireResizeEvent([
      {
        contentRect: {
          height: initialSize + sizeIncrease, // becomes 100px larger
          width: initialSize + sizeIncrease, // becomes 100px larger
        },
      },
    ]);
  });

  // check the wrapper did not resize
  expect(
    getComputedStyle(container.firstChild).getPropertyValue('width'),
  ).toEqual(`${initialSize}px`);
  expect(
    getComputedStyle(container.firstChild).getPropertyValue('height'),
  ).toEqual(`${initialSize}px`);
});

it('should resize when not in view', () => {
  const initialSize = 100;
  const sizeIncrease = 100;

  const { container } = render(
    <ContentShiftBlocker initialWidth={initialSize} initialHeight={initialSize}>
      <Content />
    </ContentShiftBlocker>,
  );

  // check initial size
  expect(
    getComputedStyle(container.firstChild).getPropertyValue('width'),
  ).toEqual(`${initialSize}px`);

  expect(
    getComputedStyle(container.firstChild).getPropertyValue('height'),
  ).toEqual(`${initialSize}px`);

  act(() => {
    // simulate off screen and resize events
    IOInstance.fireIntersectEvent([
      {
        isIntersecting: false, // is not in view
        boundingClientRect: {
          top: -9999, // is above viewport
          height: initialSize,
          width: initialSize,
        },
      },
    ]);
    ROInstance.fireResizeEvent([
      {
        contentRect: {
          height: initialSize + sizeIncrease, // becomes 100px larger
          width: initialSize + sizeIncrease, // becomes 100px larger
        },
      },
    ]);
  });

  // check the wrapper resized
  expect(
    getComputedStyle(container.firstChild).getPropertyValue('width'),
  ).toEqual(`${initialSize + sizeIncrease}px`);
  expect(
    getComputedStyle(container.firstChild).getPropertyValue('height'),
  ).toEqual(`${initialSize + sizeIncrease}px`);
});

it('should not adjust scroll position when content is below viewport', () => {
  const initialScrollYPosition = 300;
  const initialSize = 200;
  const sizeDecrease = 100;
  const initialPagelHeight = 5000;
  const pageHeightDecreaseAmount = sizeDecrease;

  global.pageYOffset = initialScrollYPosition;

  // simulate the document becoming smaller with each call to document.body.scrollHeight
  const mockScrollHeight = jest
    .fn()
    .mockReturnValueOnce(initialPagelHeight) // 1st call to document.body.scrollHeight
    .mockReturnValueOnce(initialPagelHeight - pageHeightDecreaseAmount); // 2nd call to document.body.scrollHeight

  Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
    configurable: true,
    get() {
      return mockScrollHeight();
    },
  });

  render(
    <ContentShiftBlocker initialWidth={initialSize} initialHeight={initialSize}>
      <Content />
    </ContentShiftBlocker>,
  );

  act(() => {
    // simulate below viewport and resize events
    IOInstance.fireIntersectEvent([
      {
        isIntersecting: false, // is not in view
        boundingClientRect: {
          top: 9999, // is below viewport
          height: initialSize,
          width: initialSize,
        },
      },
    ]);
    ROInstance.fireResizeEvent([
      {
        contentRect: {
          height: initialSize - sizeDecrease, // becomes 100px smaller
          width: initialSize - sizeDecrease, // becomes 100px smaller
        },
      },
    ]);
  });

  expect(global.scrollTo).not.toHaveBeenCalledWith();
  expect(global.pageYOffset).toEqual(initialScrollYPosition);
});

it('should adjust Y scroll position when above viewport and child content becomes smaller', () => {
  const initialScrollYPosition = 1000;
  const expectedXPos = 0;
  const expectedYPos = 900;
  const initialSize = 200; // todo change this name
  const sizeDecrease = 100;
  const initialPagelHeight = 5000;
  const pageHeightDecreaseAmount = sizeDecrease;

  global.pageYOffset = initialScrollYPosition;

  // simulate the document becoming smaller with each call to document.body.scrollHeight
  const mockScrollHeight = jest
    .fn()
    .mockReturnValueOnce(initialPagelHeight) // 1st call to document.body.scrollHeight
    .mockReturnValueOnce(initialPagelHeight - pageHeightDecreaseAmount); // 2nd call to document.body.scrollHeight

  Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
    configurable: true,
    get() {
      return mockScrollHeight();
    },
  });

  document.body.scrollHeight = render(
    <ContentShiftBlocker initialWidth={100} initialHeight={100}>
      <Content />
    </ContentShiftBlocker>,
  );

  act(() => {
    // simulate above viewport and resize events
    IOInstance.fireIntersectEvent([
      {
        isIntersecting: false, // is not in view
        boundingClientRect: {
          top: -9999, // is above viewport
          height: initialSize,
          width: initialSize,
        },
      },
    ]);
    ROInstance.fireResizeEvent([
      {
        contentRect: {
          height: initialSize - sizeDecrease, // becomes 100px smaller
          width: initialSize - sizeDecrease, // becomes 100px smaller
        },
      },
    ]);
  });

  expect(global.scrollTo).toHaveBeenCalledWith(expectedXPos, expectedYPos);
  expect(global.pageYOffset).toEqual(
    initialScrollYPosition - pageHeightDecreaseAmount,
  );
});

it('should not adjust scroll position (with js) if CSS scroll anchoring is supported', () => {
  const initialScrollYPosition = 300;
  const initialSize = 100;
  const sizeIncrease = 100;

  global.CSS = {
    supports: () => true, // simulate support for overflow-anchor: auto
  };
  global.pageYOffset = initialScrollYPosition;

  render(
    <ContentShiftBlocker>
      <Content />
    </ContentShiftBlocker>,
  );

  act(() => {
    // simulate above viewport and resize events
    IOInstance.fireIntersectEvent([
      {
        isIntersecting: false, // is not in view
        boundingClientRect: {
          top: -9999, // is above viewport
          height: initialSize,
          width: initialSize,
        },
      },
    ]);
    ROInstance.fireResizeEvent([
      {
        contentRect: {
          height: initialSize + sizeIncrease, // becomes 100px larger
          width: initialSize + sizeIncrease, // becomes 100px larger
        },
      },
    ]);
  });

  expect(global.scrollTo).not.toHaveBeenCalled();
  expect(global.pageYOffset).toEqual(initialScrollYPosition);
});

it('should adjust Y scroll position when above viewport and child content becomes larger', () => {
  const initialScrollYPosition = 1000;
  const expectedXPos = 0;
  const expectedYPos = 1100;
  const initialSize = 200; // todo change this name
  const sizeIncrease = 100;
  const initialPagelHeight = 5000;
  const pageHeightDecreaseAmount = sizeIncrease;

  global.pageYOffset = initialScrollYPosition;

  // simulate the document becoming smaller with each call to document.body.scrollHeight
  const mockScrollHeight = jest
    .fn()
    .mockReturnValueOnce(initialPagelHeight) // 1st call to document.body.scrollHeight
    .mockReturnValueOnce(initialPagelHeight + pageHeightDecreaseAmount); // 2nd call to document.body.scrollHeight

  Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
    configurable: true,
    get() {
      return mockScrollHeight();
    },
  });

  render(
    <ContentShiftBlocker initialWidth={100} initialHeight={100}>
      <Content />
    </ContentShiftBlocker>,
  );

  Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
    get() {
      this._scrollHeight += 100; // simulate the viewport becoming larger
      return this._scrollHeight;
    },
  });

  act(() => {
    // simulate above viewport and resize events
    IOInstance.fireIntersectEvent([
      {
        isIntersecting: false,
        boundingClientRect: {
          top: -9999, // is above viewport
          height: initialSize,
          width: initialSize,
        },
      },
    ]);
    ROInstance.fireResizeEvent([
      {
        contentRect: {
          height: initialSize + sizeIncrease, // becomes 100px larger
          width: initialSize + sizeIncrease, // becomes 100px larger
        },
      },
    ]);
  });

  expect(global.scrollTo).toHaveBeenCalledWith(expectedXPos, expectedYPos);
  expect(global.pageYOffset).toEqual(1100);
});

xit('should load ResizeObserver polyfill if not natively suported', async () => {
  delete global.ResizeObserver;

  expect(global.ResizeObserver).not.toBeTruthy();

  await render(
    <ContentShiftBlocker>
      <Content />
    </ContentShiftBlocker>,
  );

  expect(true).toEqual(true); // TODO
});

xit('should load IntersectionObserver polyfill if not natively supported', async () => {
  delete global.IntersectionObserver;

  expect(global.IntersectionObserver).not.toBeTruthy();

  await render(
    <ContentShiftBlocker>
      <Content />
    </ContentShiftBlocker>,
  );

  expect(global.IntersectionObserver).toBeTruthy();
});
