import { renderHook } from '@testing-library/react-hooks';
import useWebVitals from './index';

let eventMap = {};

const mockEventListener = mockedEvent => {
  const originalAddEventListener = window.addEventListener;
  const originalRemoveEventListener = window.removeEventListener;
  window.addEventListener = jest.fn((event, cb) => {
    if (event !== mockedEvent) {
      originalAddEventListener(event, cb);
    } else {
      eventMap[event] = cb;
    }
  });
  window.removeEventListener = jest.fn((event, cb) => {
    if (event !== mockedEvent) {
      originalRemoveEventListener(event, cb);
    } else {
      delete eventMap[event];
    }
  });
};

describe('useWebVitals', () => {
  afterEach(() => {
    eventMap = {};
  });

  it('does nothing if enabled is false', () => {
    mockEventListener('pagehide');
    renderHook(() => useWebVitals({ enabled: false }));

    expect(eventMap).not.toHaveProperty('pagehide');
  });
});
