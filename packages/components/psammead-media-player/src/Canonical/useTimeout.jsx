import { useRef, useEffect } from 'react';

/**
 * useTimeout Hook.
 * @param {function} callback A callback function that's passed `true` if the timer
 *                            completes, and `false` if it's interrupted.
 * @param {object} iframeRef A React Ref. providing access to an iframe DOM node.
 * @param {number} timeout The number of milliseconds until the timer completes.
 */
const useTimeout = (callback, iframeRef, timeout) => {
  // Persist a reference to the timer across renders. This is used to clearTimeout.
  const timer = useRef(null);

  const handleLoad = () => {
    clearTimeout(timer.current);
    callback(false);
  };

  // This particular effect will run on mount and (the returned function) on unmount.
  useEffect(() => {
    // The `current` property of a React DOM reference refers to the element we're
    // attaching a `load` event handler to. This event will be removed after firing.
    iframeRef.current.addEventListener('load', handleLoad, { once: true });
    timer.current = setTimeout(() => {
      callback(true);
    }, timeout);
    return () => clearTimeout(timer.current);
  }, []);
};

export default useTimeout;
