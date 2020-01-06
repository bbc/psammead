import { useRef, useEffect } from 'react';

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
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
};

export default useTimeout;
