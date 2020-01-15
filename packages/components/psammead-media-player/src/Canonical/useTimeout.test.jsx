import React, { useRef } from 'react';
import { cleanup, render } from '@testing-library/react';
import useTimeout from './useTimeout';

afterEach(cleanup);

describe('useTimeout hook', () => {
  it(`should throw if passed an invalid 'iframeRef'`, () => {
    // We mock console.error for the duration of this test to eliminate
    // the noise that would be emitted by <TestComponent /> when it throws.
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const TestComponent = () => {
      const iframeRef = useRef(null);
      useTimeout(() => {}, '', 5000);
      return <iframe title="iframe" ref={iframeRef} />;
    };

    expect(() => render(<TestComponent />)).toThrow(
      Error(`useTimeout expected 'iframeRef' to be a valid React DOM Ref.`),
    );

    spy.mockRestore();
  });
});
