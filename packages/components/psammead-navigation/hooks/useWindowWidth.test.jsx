import React from 'react';
import { render, act } from '@testing-library/react';
import useWindowWidth from './useWindowWidth';

// Trigger the window resize event
function fireResize(width) {
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
}

const TestComponent = () => {
  const windowWidth = useWindowWidth(false);

  return <span>{windowWidth}</span>;
};

describe('WindowWith hook', () => {
  it('should test that the viewport changes', async () => {
    const { container, rerender } = render(<TestComponent />);
    const span = container.firstChild;

    // The default innerWidth set by Jest is 1024px
    expect(span.textContent).toBe('1024');

    await act(async () => fireResize(600));

    rerender(<TestComponent />);
    expect(span.textContent).toBe('600');
  });
});
