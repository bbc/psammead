import { useRef, useEffect } from 'react';

/**
 * useTimeout Hook.
 * @param {function} callback A callback function that returns `true` or `false`.
 * @param {object} iframeRef A React DOM reference to an iframe.
 * @param {number} timeout The number of milliseconds until the timeout returns `true`.
 */
const useTimeout = (callback, iframeRef, timeout) => {
  const timer = useRef(null);

  const handleLoad = () => {
    clearTimeout(timer.current);
    callback(false);
  };

  useEffect(() => {
    iframeRef.current.addEventListener('load', handleLoad, { once: true });
    timer.current = setTimeout(() => {
      callback(true);
    }, timeout);
    return () => clearTimeout(timer.current);
  }, []);
};

export default useTimeout;
