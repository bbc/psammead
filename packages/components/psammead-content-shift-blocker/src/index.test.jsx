/* eslint-disable no-underscore-dangle */

import React from 'react';
import { render, act } from '@testing-library/react';
import styled from 'styled-components';
import ContentShiftBlocker from '.';

let IOInstance;
let ROInstance;

afterEach(() => {
  IOInstance = null;
  ROInstance = null;

  Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
    configurable: true,
    get() {
      return this._scrollHeight;
    },
    set(val) {
      this._scrollHeight = val;
    },
  });
  document.body.scrollHeight = 768;
  jest.clearAllMocks();
});

window.IntersectionObserver = callback => {
  IOInstance = {
    observe: jest.fn(),
    disconnect: jest.fn(),
    fireIntersectEvent: entries => callback(entries),
  };
  return IOInstance;
};
window.ResizeObserver = callback => {
  ROInstance = {
    observe: jest.fn(),
    disconnect: jest.fn(),
    fireResizeEvent: entries => callback(entries),
  };
  return ROInstance;
};

window.scrollTo = jest.fn();

jest.mock('intersection-observer', () => jest.fn());
jest.mock('@juggle/resize-observer');

const getHeight = ({ contentHeight }) => `${contentHeight}px`;
const getWidth = ({ contentWidth }) => `${contentWidth}px`;
const Content = styled.div`
  height: ${getHeight};
  width: ${getWidth};
`;

it('should render children', () => {
  const { getByText } = render(
    <ContentShiftBlocker>
      <span>I should render</span>
    </ContentShiftBlocker>,
  );

  expect(getByText('I should render')).toBeTruthy();
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
      <Content contentWidth={100} contentHeight={100} />
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

  const wrapperWidth = getComputedStyle(container.firstChild).getPropertyValue(
    'width',
  );
  const wrapperHeight = getComputedStyle(container.firstChild).getPropertyValue(
    'height',
  );

  // check the wrapper did not resize
  expect(wrapperWidth).toEqual('100px');
  expect(wrapperHeight).toEqual('100px');
});

it('should resize when not in view', () => {
  const { container } = render(
    <ContentShiftBlocker initialWidth={100} initialHeight={100}>
      <Content contentWidth={100} contentHeight={100} />
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
          y: -9999,
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

  const wrapperWidth = getComputedStyle(container.firstChild).getPropertyValue(
    'width',
  );
  const wrapperHeight = getComputedStyle(container.firstChild).getPropertyValue(
    'height',
  );

  // check the wrapper resized
  expect(wrapperWidth).toEqual('200px');
  expect(wrapperHeight).toEqual('200px');
});

it('should adjust Y scroll position when above viewport and child content gets smaller', () => {
  Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
    get() {
      this._scrollHeight -= 100; // simulate the viewport getting smaller
      return this._scrollHeight;
    },
  });
  render(
    <ContentShiftBlocker initialWidth={100} initialHeight={100}>
      <Content contentWidth={100} contentHeight={100} />
    </ContentShiftBlocker>,
  );

  act(() => {
    // simulate above viewport and resize events
    IOInstance.fireIntersectEvent([
      {
        isIntersecting: false,
        boundingClientRect: {
          y: -9999,
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

  expect(window.scrollTo).toHaveBeenCalledWith(0, -100);
});

it('should adjust Y scroll position when above viewport and child content gets bigger', () => {
  render(
    <ContentShiftBlocker initialWidth={100} initialHeight={100}>
      <Content contentWidth={100} contentHeight={100} />
    </ContentShiftBlocker>,
  );

  Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
    get() {
      this._scrollHeight += 100; // simulate the viewport getting bigger
      return this._scrollHeight;
    },
  });

  act(() => {
    // simulate above viewport and resize events
    IOInstance.fireIntersectEvent([
      {
        isIntersecting: false,
        boundingClientRect: {
          y: -9999,
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

  expect(window.scrollTo).toHaveBeenCalledWith(0, 100);
});

// it('should dynamically import the ResizeObserver polyfill', () => {
//   delete window.ResizeObserver;

//   render(
//     <ContentShiftBlocker initialWidth={100} initialHeight={100}>
//       <Content contentWidth={100} contentHeight={100} />
//     </ContentShiftBlocker>,
//   );

//   expect(2).toHaveBeenCalledWith();
// });

// it('should dynamically import the IntersectionObserver polyfill', () => {
//   delete window.IntersectionObserver;

//   render(
//     <ContentShiftBlocker initialWidth={100} initialHeight={100}>
//       <Content contentWidth={100} contentHeight={100} />
//     </ContentShiftBlocker>,
//   );

//   expect(2).toHaveBeenCalledWith();
// });
