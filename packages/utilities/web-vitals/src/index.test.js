import fetch from 'cross-fetch';
import * as webVitals from 'web-vitals';
import { renderHook } from '@testing-library/react-hooks';
import useWebVitals from './index';

jest.mock('cross-fetch');
jest.mock('web-vitals');

const mockVitalsGet = (name, value) => reportHandler => {
  reportHandler({ name, value });
};

webVitals.getCLS.mockImplementation(mockVitalsGet('CLS', 1));
webVitals.getFID.mockImplementation(mockVitalsGet('FID', 2));
webVitals.getLCP.mockImplementation(mockVitalsGet('LCP', 3));
webVitals.getFCP.mockImplementation(mockVitalsGet('FCP', 4));
webVitals.getTTFB.mockImplementation(mockVitalsGet('TTFB', 5));

let eventListeners = {};
const noOpFunctionString = 'function noOp() {}';

const mockEventListener = mockedEvent => {
  const originalAddEventListener = window.addEventListener;
  const originalRemoveEventListener = window.removeEventListener;
  window.addEventListener = jest.fn((event, cb) => {
    if (event !== mockedEvent) {
      originalAddEventListener(event, cb);
    } else {
      eventListeners[event] = cb;
    }
  });
  window.removeEventListener = jest.fn((event, cb) => {
    if (event !== mockedEvent) {
      originalRemoveEventListener(event, cb);
    } else {
      delete eventListeners[event];
    }
  });
};

const mockSendBeacon = (mockFunction = () => {}) => {
  navigator.sendBeacon = jest.fn(mockFunction);
};

describe('useWebVitals', () => {
  beforeEach(() => {
    mockEventListener('pagehide');
    Date.now = jest.fn().mockImplementation(() => 10000);
  });

  afterEach(() => {
    eventListeners = {};
    delete navigator.sendBeacon;
    jest.resetAllMocks();
    Date.now.mockRestore();
  });

  describe('when enabled is set to false', () => {
    const enabled = false;
    it('registers a no-op function on the pagehide event listener', () => {
      mockSendBeacon();
      renderHook(() => useWebVitals({ enabled }));

      expect(eventListeners.pagehide).toBeInstanceOf(Function);
      expect(eventListeners.pagehide.toString()).toEqual(noOpFunctionString);

      eventListeners.pagehide();

      expect(navigator.sendBeacon).not.toHaveBeenCalled();
      expect(fetch).not.toHaveBeenCalled();
    });

    it('collects web vitals data, but does not send it', () => {
      mockSendBeacon();
      renderHook(() => useWebVitals({ enabled }));

      expect(webVitals.getCLS).toHaveBeenCalled();
      expect(webVitals.getFID).toHaveBeenCalled();
      expect(webVitals.getLCP).toHaveBeenCalled();
      expect(webVitals.getFCP).toHaveBeenCalled();
      expect(webVitals.getTTFB).toHaveBeenCalled();

      eventListeners.pagehide();

      expect(navigator.sendBeacon).not.toHaveBeenCalled();
      expect(fetch).not.toHaveBeenCalled();
    });
  });

  describe('when enabled is set to true', () => {
    const enabled = true;
    it('sends a beacon via navigator.sendBeacon when enabled', () => {
      mockSendBeacon();
      renderHook(() => useWebVitals({ enabled }));

      eventListeners.pagehide();

      expect(navigator.sendBeacon).toHaveBeenCalled();
    });

    it('falls back to use fetch when sendBeacon is unavailable', () => {
      renderHook(() => useWebVitals({ enabled }));

      eventListeners.pagehide();

      expect(navigator.sendBeacon).toBeUndefined();
      expect(fetch).toHaveBeenCalled();
    });

    it('collects and sends web vitals data', () => {
      mockSendBeacon();
      renderHook(() => useWebVitals({ enabled }));

      expect(webVitals.getCLS).toHaveBeenCalled();
      expect(webVitals.getFID).toHaveBeenCalled();
      expect(webVitals.getLCP).toHaveBeenCalled();
      expect(webVitals.getFCP).toHaveBeenCalled();
      expect(webVitals.getTTFB).toHaveBeenCalled();

      eventListeners.pagehide();

      const expectedBeacon = [
        expect.objectContaining({
          body: expect.objectContaining({
            cls: 1,
            fid: 2,
            lcp: 3,
            fcp: 4,
            ttfb: 5,
          }),
        }),
      ];

      const sentBeacon = navigator.sendBeacon.mock.calls[0][1];

      expect(JSON.parse(sentBeacon)).toEqual(expectedBeacon);
    });

    it('records the view age of the page at the time the beacon is sent', () => {
      mockSendBeacon();
      renderHook(() => useWebVitals({ enabled }));

      Date.now.mockImplementation(() => 10500);

      eventListeners.pagehide();

      const expectedBeacon = [
        expect.objectContaining({
          age: 500,
        }),
      ];

      const sentBeacon = navigator.sendBeacon.mock.calls[0][1];

      expect(JSON.parse(sentBeacon)).toEqual(expectedBeacon);
    });
  });
});
