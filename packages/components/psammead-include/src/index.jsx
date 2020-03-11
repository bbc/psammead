import React, { useState, useEffect } from 'react';
import HTMLReactParser from 'html-react-parser';

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
  const [scriptMetadata, setScriptMetadata] = useState();
  const [scriptPlaceholder, setScriptPlaceholders] = useState();

  const extractScriptToRender = () => {
    let scriptMetadata = [];
    const scriptPlaceholders = HTMLReactParser(html, {
      replace: function({ type, attribs: attributes, children }) {
        if (type === 'script') {
          const ref = React.createRef();

          scriptMetadata = [
            ...scriptMetadata,
            {
              attributes,
              data: children.length > 0 ? children[0].data : null,
              ref,
            },
          ];

          return <span ref={ref}></span>;
        } else {
          return <></>;
        }
      },
    });
    return {
      scriptMetadata,
      scriptPlaceholders,
    };
  };

  const attachScriptsToPlaceholders = () => {
    scriptMetadata.forEach(({ attributes, data, ref }) => {
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
  };

  if (!scriptMetadata) {
    const { scriptMetadata, scriptPlaceholders } = extractScriptToRender();

    setScriptPlaceholders(scriptPlaceholders);
    setScriptMetadata(scriptMetadata);
  }

  useEffect(() => {
    if (scriptMetadata) {
      attachScriptsToPlaceholders();
    }
  }, [scriptMetadata]);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      {scriptPlaceholder}
    </>
  );
};

export default Include;
