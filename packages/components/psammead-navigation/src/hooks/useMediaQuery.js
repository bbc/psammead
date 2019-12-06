import { useState, useEffect } from 'react';

const useMediaQuery = query => {
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const mediaMatches = mediaQueryList.matches;

    setMatches(mediaMatches);

    const handler = event => setMatches(event.matches);

    mediaQueryList.addListener(handler);
    return () => mediaQueryList.removeListener(handler);
  }, []);

  return matches;
};

export default useMediaQuery;
