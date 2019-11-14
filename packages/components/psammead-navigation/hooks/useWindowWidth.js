import { useState, useEffect } from 'react';

const useWindowWidth = () => {
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

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return width;
};

export default useWindowWidth;
