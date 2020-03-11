import React, { useState, useLayoutEffect, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';
import HTMLReactParser from 'html-react-parser';
import Helmet from 'react-helmet';

const Include = ({ html, requireJsSrc }) => {
  if (requireJsSrc) {
    return (
      <RequireJSWrapper requireJsSrc={requireJsSrc}>
        <IncludeRaw html={html}></IncludeRaw>
      </RequireJSWrapper>
    );
  } else {
    return <IncludeRaw html={html}></IncludeRaw>;
  }
};

const RequireJSWrapper = ({ requireJsSrc, children }) => {
  const [requireJsLoaded, setRequireJsLoaded] = useState(false);

  const requireJsInHead = () => {
    const headChildren = document.getElementsByTagName('head')[0].children;
    const headAsArray = [...headChildren];
    return headAsArray.some(({ src }) => {
      return src ? src === requireJsSrc : false;
    });
  };

  const addRequireJsToHead = () => {
    const script = document.createElement('script');
    script.src = requireJsSrc;
    script.async = true;
    script.onload = () => {
      setRequireJsLoaded(true);
    };

    const head = document.getElementsByTagName('head')[0];
    head.appendChild(script);
  };

  useEffect(() => {
    if (!requireJsLoaded) {
      if (!requireJsInHead()) {
        addRequireJsToHead();
      } else {
        setRequireJsLoaded(true);
      }
    }
  }, [requireJsLoaded]);

  if (requireJsLoaded) {
    return children;
  } else {
    return null;
  }
};

const IncludeRaw = ({ html }) => {
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

  return toRender;
};

export default Include;
