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

  document.body.scrollHeight = 768; // set the default height of the document
});

afterEach(jest.clearAllMocks);

global.scrollTo = jest.fn();

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
  const { container } = render(
    <ContentShiftBlocker initialWidth="10em" initialHeight="10em">
      <Content />
    </ContentShiftBlocker>,
  );

  expect(
    getComputedStyle(container.firstChild).getPropertyValue('width'),
  ).toEqual('10em');

  expect(
    getComputedStyle(container.firstChild).getPropertyValue('height'),
  ).toEqual('10em');
});

it('should not resize when in view', async () => {
  const { container } = render(
    <ContentShiftBlocker initialWidth={100} initialHeight={100}>
      <Content />
    </ContentShiftBlocker>,
  );

  // check initial size
  expect(
    getComputedStyle(container.firstChild).getPropertyValue('width'),
  ).toEqual('100px');

  expect(
    getComputedStyle(container.firstChild).getPropertyValue('height'),
  ).toEqual('100px');

  act(() => {
    IOInstance.fireIntersectEvent([
      {
        isIntersecting: true,
        boundingClientRect: {
          height: 100,
          width: 100,
        },
      },
    ]);
    ROInstance.fireResizeEvent([
      {
        contentRect: {
          height: 200,
          width: 200,
        },
      },
    ]);
  });

  // check the wrapper did not resize
  expect(
    getComputedStyle(container.firstChild).getPropertyValue('width'),
  ).toEqual('100px');
  expect(
    getComputedStyle(container.firstChild).getPropertyValue('height'),
  ).toEqual('100px');
});

it('should resize when not in view', () => {
  const { container } = render(
    <ContentShiftBlocker initialWidth={100} initialHeight={100}>
      <Content />
    </ContentShiftBlocker>,
  );

  // check initial size
  expect(
    getComputedStyle(container.firstChild).getPropertyValue('width'),
  ).toEqual('100px');

  expect(
    getComputedStyle(container.firstChild).getPropertyValue('height'),
  ).toEqual('100px');

  act(() => {
    // simulate off screen and resize events
    IOInstance.fireIntersectEvent([
      {
        isIntersecting: false,
        boundingClientRect: {
          top: -9999,
          height: 100,
          width: 100,
        },
      },
    ]);
    ROInstance.fireResizeEvent([
      {
        contentRect: {
          height: 200,
          width: 200,
        },
      },
    ]);
  });

  // check the wrapper resized
  expect(
    getComputedStyle(container.firstChild).getPropertyValue('width'),
  ).toEqual('200px');
  expect(
    getComputedStyle(container.firstChild).getPropertyValue('height'),
  ).toEqual('200px');
});

it('should adjust Y scroll position when above viewport and child content becomes smaller', () => {
  const expectedXPos = 0;
  const expectedYPos = -100;

  Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
    get() {
      this._scrollHeight -= 100; // simulate the viewport becoming smaller
      return this._scrollHeight;
    },
  });
  render(
    <ContentShiftBlocker initialWidth={100} initialHeight={100}>
      <Content />
    </ContentShiftBlocker>,
  );

  act(() => {
    // simulate above viewport and resize events
    IOInstance.fireIntersectEvent([
      {
        isIntersecting: false,
        boundingClientRect: {
          top: -9999,
          height: 200,
          width: 200,
        },
      },
    ]);
    ROInstance.fireResizeEvent([
      {
        contentRect: {
          height: 100, // becomes 100px smaller
          width: 100, // becomes 100px smaller
        },
      },
    ]);
  });

  expect(global.scrollTo).toHaveBeenCalledWith(expectedXPos, expectedYPos);
});

it('should adjust Y scroll position when above viewport and child content becomes larger', () => {
  const expectedXPos = 0;
  const expectedYPos = 100;

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
          top: -9999,
          height: 100,
          width: 100,
        },
      },
    ]);
    ROInstance.fireResizeEvent([
      {
        contentRect: {
          height: 200, // becomes 100px larger
          width: 200, // becomes 100px larger
        },
      },
    ]);
  });

  expect(global.scrollTo).toHaveBeenCalledWith(expectedXPos, expectedYPos);
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

it('should load IntersectionObserver polyfill if not natively supported', async () => {
  delete global.IntersectionObserver;

  expect(global.IntersectionObserver).not.toBeTruthy();

  await render(
    <ContentShiftBlocker>
      <Content />
    </ContentShiftBlocker>,
  );

  expect(global.IntersectionObserver).toBeTruthy();
});

it('should not adjust scroll position if CSS scroll anchoring is supported', () => {
  global.CSS = {
    supports: () => true, // simulate support for overflow-anchor: auto
  };

  render(
    <ContentShiftBlocker>
      <Content />
    </ContentShiftBlocker>,
  );

  act(() => {
    // simulate above viewport and resize events
    IOInstance.fireIntersectEvent([
      {
        isIntersecting: false,
        boundingClientRect: {
          top: -9999,
          height: 100,
          width: 100,
        },
      },
    ]);
    ROInstance.fireResizeEvent([
      {
        contentRect: {
          height: 200, // becomes 100px larger
          width: 200, // becomes 100px larger
        },
      },
    ]);
  });

  expect(global.scrollTo).not.toHaveBeenCalled();
});
