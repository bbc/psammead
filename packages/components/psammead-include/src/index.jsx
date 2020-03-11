import React, { useState, useLayoutEffect, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';
import HTMLReactParser from 'html-react-parser';
import Helmet from 'react-helmet';

const Include = ({ html, requireJsSrc }) => {
  const [scripts, setScripts] = useState();
  const [toRender, setToRender] = useState();

  if (!scripts) {
    let tempScripts = [];

    setToRender(
      HTMLReactParser(html, {
        replace: function({ type, attribs: attributes, children }) {
          if (type === 'script') {
            const ref = React.createRef();

            tempScripts = [
              ...tempScripts,
              {
                attributes,
                data: children.length > 0 ? children[0].data : null,
                ref,
              },
            ];

            return <span ref={ref}></span>;
          }
        },
      }),
    );

    setScripts(tempScripts);
  }

  useEffect(() => {
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
      {/* <Helmet>
        <script src={requireJsSrc}></script>
      </Helmet> */}
      {toRender}
    </>
  );
};

export default Include;
