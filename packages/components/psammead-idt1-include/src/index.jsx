import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';

// vendored in this library for demonstration purposes: https://www.npmjs.com/package/dangerously-set-html-content
function DangerouslySetHtmlContent(props) {
  const { html } = props;
  const divRef = useRef(null);

  useEffect(() => {
    const slotHtml = document.createRange().createContextualFragment(html); // Create a 'tiny' document and parse the html string
    divRef.current.innerHTML = ''; // Clear the container
    divRef.current.appendChild(slotHtml); // Append the new content
  }, [html]);

  return <div ref={divRef}></div>;
}

const Idt1Include = ({ html, requireJsSrc }) => {
  return (
    <>
      <Helmet>
        <script src={requireJsSrc} />
      </Helmet>

      {<DangerouslySetHtmlContent html={html} />}
    </>
  );
};

export default Idt1Include;
