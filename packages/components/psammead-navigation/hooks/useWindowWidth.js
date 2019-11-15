import debounce from 'lodash/debounce';
import { useState, useEffect } from 'react';

const useWindowWidth = (limitRate = true) => {
  const isClient = typeof window === 'object';

  const getSize = () => (isClient ? window.innerWidth : undefined);

  const [width, setWidth] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return null;
    }

    const handleResize = () => {
      setWidth(getSize());
    };

    window.addEventListener(
      'resize',
      limitRate ? debounce(handleResize, 100) : handleResize, // Don't apply debounce when calling from the test
    );
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return width;
};

export default useWindowWidth;
