import { useRef, useEffect } from 'react';

const useTimeout = (callback, iframe, timeout) => {
  const timer = useRef(null);

  const handleLoad = () => {
    clearTimeout(timer.current);
    callback(false);
  };

  useEffect(() => {
    iframe.current.addEventListener('load', handleLoad);
    timer.current = setTimeout(() => {
      callback(true);
    }, timeout);
    return () => {
      clearTimeout(timer.current);
    };
  }, [iframe]);
};

export default useTimeout;
