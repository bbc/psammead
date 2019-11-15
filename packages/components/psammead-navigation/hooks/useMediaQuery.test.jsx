import { renderHook } from '@testing-library/react-hooks';
import useMediaQuery from './useMediaQuery';

describe('MediaQuery hook', () => {
  it('it should test that the media query matches', async () => {
    window.matchMedia = jest.fn().mockImplementation(query => {
      return {
        matches: query === '(max-width: 600px)',
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    });

    const { result } = renderHook(() => useMediaQuery('(max-width: 600px)'));
    expect(result.current).toBe(true);
  });
});
