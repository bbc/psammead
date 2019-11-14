import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import when from 'ramda/src/when';
import is from 'ramda/src/is';
import { number, string, node, oneOfType } from 'prop-types';
import styled from 'styled-components';

const addPixelUnit = n => `${n}px`;
const getSize = when(is(Number), addPixelUnit);
const getHeight = ({ wrapperHeight }) => getSize(wrapperHeight);
const getWidth = ({ wrapperWidth }) => getSize(wrapperWidth);
const Wrapper = styled.div`
  overflow: auto;
  height: ${getHeight};
  width: ${getWidth};
`;
const ContentShiftBlocker = ({ children, initialHeight, initialWidth }) => {
  const wrapperEl = useRef(null);
  const scrollHeight = useRef(null);
  const scrollAnchorIsSupported = useRef(null);
  const [wrapperIO, setWrapperIO] = useState({});
  const [contentElRect, setContentElRect] = useState({});
  const [wrapperDimensions, setWrapperDimensions] = useState({
    height: initialHeight,
    width: initialWidth,
  });

  useEffect(() => {
    // component did mount
    let IO;
    let RO;
    if ('CSS' in window) {
      scrollAnchorIsSupported.current = CSS.supports('overflow-anchor', 'auto');
    }

    const initIO = () => {
      const callback = ([wrapperEntry]) => {
        setWrapperIO(wrapperEntry);
      };
      IO = new IntersectionObserver(callback);
      IO.observe(wrapperEl.current);
    };

    const initRO = (ResizeObserver = window.ResizeObserver) => {
      const callback = ([contentEntry]) => {
        setContentElRect(contentEntry.contentRect);
      };
      RO = new ResizeObserver(callback);
      RO.observe(wrapperEl.current.firstChild);
    };

    if ('IntersectionObserver' in window) {
      initIO();
    } else {
      import('intersection-observer').then(() => {
        IntersectionObserver.prototype.POLL_INTERVAL = 100;
        initIO();
      });
    }

    if ('ResizeObserver' in window) {
      initRO();
    } else {
      import('resize-observer-polyfill').then(module => {
        const ResizeObserver = module.default;
        initRO(ResizeObserver);
      });
    }
    const cleanup = () => {
      IO.disconnect();
      RO.disconnect();
    };
    return cleanup;
  }, []);

  useLayoutEffect(() => {
    const wrapperIsOutOfView = wrapperIO.isIntersecting === false;

    if (wrapperIsOutOfView) {
      // wrapper will resize
      const wrapperIsAboveViewport = wrapperIO.boundingClientRect.top < 0;
      const {
        width: nextWrapperWidth,
        height: nextWrapperHeight,
      } = contentElRect;

      if (!scrollAnchorIsSupported.current && wrapperIsAboveViewport) {
        scrollHeight.current = document.body.scrollHeight;
      }

      setWrapperDimensions({
        width: nextWrapperWidth,
        height: nextWrapperHeight,
      });
    }
  }, [contentElRect]);

  useEffect(() => {
    // wrapper did resize
    if (scrollAnchorIsSupported.current || scrollHeight.current === null) {
      return;
    }

    const { scrollHeight: newScrollHeight } = document.body;
    const { current: prevScrollHeight } = scrollHeight;
    const scrollHeightDiff = prevScrollHeight - newScrollHeight;
    const scrollY = window.pageYOffset;

    if (scrollHeightDiff && scrollY > 0) {
      // adjust scrollY position to prevent visible jump
      window.scrollTo(0, window.pageYOffset - scrollHeightDiff);
    }
  }, [wrapperDimensions]);

  return (
    <Wrapper
      wrapperWidth={wrapperDimensions.width}
      wrapperHeight={wrapperDimensions.height}
      ref={wrapperEl}
    >
      {children}
    </Wrapper>
  );
};

ContentShiftBlocker.propTypes = {
  children: node.isRequired,
  initialHeight: oneOfType([number, string]),
  initialWidth: oneOfType([number, string]),
};

ContentShiftBlocker.defaultProps = {
  initialHeight: 'auto',
  initialWidth: 'auto',
};

export default ContentShiftBlocker;
