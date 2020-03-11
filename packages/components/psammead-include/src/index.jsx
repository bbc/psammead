import React, { useState, useLayoutEffect, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';
import HTMLReactParser from 'html-react-parser';
import Helmet from 'react-helmet';

const Include = ({ html, requireJsSrc }) => {
  const [scripts, setScripts] = useState();
  const [toRender, setToRender] = useState();

  useEffect(() => {
    if (!scripts) {
      const tempScripts = [];
      // const requireJsRef = React.createRef();
      // tempScripts.push({
      //   attributes: { src: requireJsSrc },
      //   ref: requireJsRef,
      // });
      // const requireJs = <div ref={requireJsRef}></div>;

      setToRender(
        <>
          {HTMLReactParser(html, {
            replace: function({ type, attribs: attributes, children }) {
              if (type === 'script') {
                const ref = React.createRef();

                tempScripts.push({
                  attributes,
                  data: children[0].data,
                  ref,
                });

                return <div ref={ref}></div>;
              }
            },
          })}
        </>,
      );

      setScripts(tempScripts);
    }
  }, [toRender, scripts]);

  useLayoutEffect(() => {
    if (scripts) {
      console.log(scripts);
      scripts.forEach(({ attributes, data, ref }) => {
        const script = document.createElement('script');
        Object.entries(attributes).forEach(([key, value]) => {
          script[key] = value;
        });
        if (data) {
          const text = document.createTextNode(data);
          script.appendChild(text);
        }

        ref.current.appendChild(script);
      });
    }
  }, [scripts]);

  return (
    <>
      <script src={requireJsSrc}></script>
      {toRender}
    </>
  );
};

export default Include;
