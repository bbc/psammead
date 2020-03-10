import React, { useState, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import HTMLReactParser from 'html-react-parser';
import Helmet from 'react-helmet';

const Include = ({ html, requireJsSrc }) => {
  let scripts = [];

  const toRender = HTMLReactParser(html, {
    replace: function({ type, attribs: attributes, children }) {
      if (type === 'script') {
        scripts.push({
          attributes,
          data: children[0].data,
        });

        return <></>;
      }
    },
  });

  const scriptTags = scripts.map(({ attributes, data }) => {
    return (
      <Helmet>
        <script {...attributes}>{data}</script>;
      </Helmet>
    );
  });

  return (
    <>
      <Helmet>
        <script src={requireJsSrc}></script>
      </Helmet>
      {toRender}
      {scriptTags}
    </>
  );
};

export default Include;
