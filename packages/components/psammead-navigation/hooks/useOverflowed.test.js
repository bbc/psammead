import { renderHook } from '@testing-library/react-hooks';
import useOverflowed from './useOverflowed';

describe('Overflowed hook', () => {
  it('returns true when scrollWidth is greater than offsetWidth', () => {
    const ref = {
      current: {
        scrollWidth: 1000,
        offsetWidth: 500,
      },
    };

    const hook = renderHook(() => useOverflowed(ref));
    expect(hook.result.current).toBe(true);
  });

  it('returns false when scrollWidth is smaller than offsetWidth', () => {
    const ref = {
      current: {
        scrollWidth: 300,
        offsetWidth: 600,
      },
    };

    const hook = renderHook(() => useOverflowed(ref));
    expect(hook.result.current).toBe(false);
  });
});
