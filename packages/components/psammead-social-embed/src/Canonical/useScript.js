import { useEffect } from 'react';

/**
 * A custom Hook that.
 * @param {String} src The appended <script />'s src attribute value.
 */
const useScript = src =>
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const hasScript = !!document.querySelector(`head script[src="${src}"]`);

    if (src && !hasScript) {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [src]);

export default useScript;
