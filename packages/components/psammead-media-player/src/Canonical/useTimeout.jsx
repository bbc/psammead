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

  // The function we pass to useEffect will run on mount, and the one we return will
  // run on unmount. We don't do anything if the value of `timeout` can't be used.
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (timeout > 0) {
      iframeRef.current.addEventListener('load', handleLoad, { once: true });
      timer.current = setTimeout(() => {
        callback(true);
      }, timeout);
      return () => clearTimeout(timer.current);
    }
  }, []);
};

export default useTimeout;
