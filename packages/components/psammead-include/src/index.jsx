import React, { useState, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

const Include = ({ html }) => {
  const [initialised, setInitialised] = useState(false);
  const [ref, setRef] = useState(React.createRef());
  const [shadowRoot, setShadowRoot] = useState();

  useLayoutEffect(() => {
    setShadowRoot(ref.current.parentNode.attachShadow({ mode: 'open' }));
    setInitialised(true);
  }, [ref, setInitialised]);

  if (!initialised) {
    return <div ref={ref}></div>;
  } else {
    return ReactDOM.createPortal(
      <div dangerouslySetInnerHTML={{ __html: html }}></div>,
      shadowRoot,
    );
  }
};

export default Include;
