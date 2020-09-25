import fetch from 'cross-fetch';
import { renderHook } from '@testing-library/react-hooks';
import useWebVitals from './index';

jest.mock('cross-fetch');

let eventMap = {};
const noOpFunctionString = 'function(t){o=!t.persisted}';

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

const mockSendBeacon = (mockFunction = () => {}) => {
  navigator.sendBeacon = jest.fn(mockFunction);
};

describe('useWebVitals', () => {
  afterEach(() => {
    eventMap = {};
    delete navigator.sendBeacon;
  });

  it('registers a no-op function on the pagehide event listener if enabled is false', () => {
    mockEventListener('pagehide');
    renderHook(() => useWebVitals({ enabled: false }));

    expect(eventMap.pagehide).toBeInstanceOf(Function);
    expect(eventMap.pagehide.toString()).toEqual(noOpFunctionString);
  });

  it('sends a beacon via navigator.sendBeacon when enabled', () => {
    mockEventListener('pagehide');
    mockSendBeacon();
    renderHook(() => useWebVitals({ enabled: true }));

    eventMap.pagehide();

    expect(navigator.sendBeacon).toHaveBeenCalled();
  });

  it('falls back to use fetch when sendBeacon is unavailable', () => {
    mockEventListener('pagehide');
    renderHook(() => useWebVitals({ enabled: true }));

    eventMap.pagehide();

    expect(navigator.sendBeacon).toBeUndefined();
    expect(fetch).toHaveBeenCalled();
  });
});
