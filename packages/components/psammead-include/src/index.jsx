/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import { string } from 'prop-types';

const Include = ({ html, requireJsSrc }) => {
  if (requireJsSrc) {
    return (
      <RequireJSWrapper requireJsSrc={requireJsSrc}>
        <IncludeRaw html={html} />
      </RequireJSWrapper>
    );
  }
  return <IncludeRaw html={html} />;
};

Include.propTypes = {
  html: string.isRequired,
  requireJsSrc: string,
};

Include.defaultProps = {
  requireJsSrc: null,
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
  }
  return null;
};

const IncludeRaw = ({ html }) => {
  const [scriptMetadata, setScriptMetadata] = useState();
  const [scriptPlaceholder, setScriptPlaceholders] = useState();

  const initialiseScriptPlaceholders = () => {
    let metadata = [];

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const scripts = [...doc.getElementsByTagName('script')];
    const scriptPlaceholders = scripts.map(script => {
      const ref = React.createRef();

      metadata = [
        ...metadata,
        {
          ref,
          script,
        },
      ];

      return <span ref={ref} />;
    });

    setScriptMetadata(metadata);
    setScriptPlaceholders(scriptPlaceholders);
  };

  const attachScriptsToPlaceholders = () => {
    scriptMetadata.forEach(({ script, ref }) => {
      const scriptToAdd = document.createElement('script');
      Object.entries(script).forEach(([key, value]) => {
        scriptToAdd[key] = value;
      });
      if (script.text) {
        const text = document.createTextNode(script.text);
        scriptToAdd.appendChild(text);
      }

      ref.current.appendChild(scriptToAdd);
    });
  };

  if (!scriptMetadata) {
    initialiseScriptPlaceholders();
  }

  useEffect(() => {
    if (scriptMetadata) {
      attachScriptsToPlaceholders();
    }
  }, [scriptMetadata]);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {scriptPlaceholder}
    </>
  );
};

IncludeRaw.propTypes = {
  html: string.isRequired,
};

export default Include;
