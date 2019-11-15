import { act } from 'react-test-renderer';
import { renderHook } from '@testing-library/react-hooks';
import useWindowWidth from './useWindowWidth';

// Trigger the window resize event
function fireResize(width) {
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
}

describe('WindowWith hook', () => {
  it('should test that the viewport changes', () => {
    const hook = renderHook(() => useWindowWidth(false));
    // The default innerWidth set by Jest is 1024px
    expect(hook.result.current).toEqual(1024);

    act(() => fireResize(600));
    hook.rerender(true);
    expect(hook.result.current).toEqual(600);
  });
});
