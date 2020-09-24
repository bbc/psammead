import { renderHook } from '@testing-library/react-hooks';
import useEvent from './index';

const mockEventListener = (
  mockedEvent,
  { addedListeners = [], removedListeners = [], triggerEvent },
) => {
  const originalAddEventListener = window.addEventListener;
  const originalRemoveEventListener = window.removeEventListener;
  window.addEventListener = jest.fn((event, cb) => {
    if (event !== mockedEvent) {
      originalAddEventListener(event, cb);
    } else {
      addedListeners.push(event);
      if (triggerEvent) cb();
    }
  });
  window.removeEventListener = jest.fn((event, cb) => {
    if (event !== mockedEvent) {
      originalRemoveEventListener(event, cb);
    } else {
      removedListeners.push(event);
    }
  });
};

describe('useEvent', () => {
  it('should add an event listener for the given event', () => {
    const addedListeners = [];
    const callback = () => {};
    mockEventListener('message', { addedListeners });

    renderHook(() => useEvent('message', callback));

    expect(addedListeners.length).toEqual(1);
    expect(addedListeners[0]).toEqual('message');
  });

  it('should call the given callback function when the given event is triggered', () => {
    const callback = jest.fn(() => {});
    mockEventListener('message', { triggerEvent: true });

    renderHook(() => useEvent('message', callback));

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should remove the event listener when the page is unmounted', () => {
    const removedListeners = [];
    const callback = () => {};
    mockEventListener('message', { removedListeners });

    const { unmount } = renderHook(() => useEvent('message', callback));

    expect(removedListeners.length).toEqual(0);

    unmount();

    expect(removedListeners.length).toEqual(1);
    expect(removedListeners[0]).toEqual('message');
  });
});
