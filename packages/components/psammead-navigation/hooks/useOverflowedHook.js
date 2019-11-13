import { useState, useEffect } from 'react';

const useOverflowed = (ref, width) => {
  const [isOverflowed, setIsOverflowed] = useState();

  useEffect(() => {
    const overflow = ref.current.scrollWidth > ref.current.offsetWidth;
    setIsOverflowed(overflow);
  }, [width]);

  return isOverflowed;
};

export default useOverflowed;
