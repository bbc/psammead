import { renderHook, act } from '@testing-library/react-hooks';
import useMediaQuery from './useMediaQuery';

describe('MediaQuery hook', () => {
  const mockAddListener = jest.fn();
  const mockRemoveListener = jest.fn();

  window.matchMedia = jest.fn().mockImplementation(query => {
    return {
      matches: query === '(max-width: 600px)',
      addListener: mockAddListener,
      removeListener: mockRemoveListener,
    };
  });

  beforeEach(() => {
    mockAddListener.mockReset();
    mockRemoveListener.mockReset();
  });

  it('it should test that the media query matches', async () => {
    const { result } = renderHook(() => useMediaQuery('(max-width: 600px)'));
    expect(result.current).toBe(true);
    expect(mockAddListener).toBeCalled();
  });

  it('should add a listener that updates the state', async () => {
    const { result } = renderHook(() => useMediaQuery('(max-width: 600px)'));

    act(() => mockAddListener.mock.calls[0][0]({ matches: false }));
    expect(result.current).toBe(false);
    act(() => mockAddListener.mock.calls[0][0]({ matches: true }));
    expect(result.current).toBe(true);
  });
});
