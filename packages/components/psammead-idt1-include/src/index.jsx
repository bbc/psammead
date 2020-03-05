import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Idt1Include = ({ html, requireJsSrc }) => {
  const [isRequireLoaded, setIsRequireLoaded] = useState(false);

  const handleOnLoad = () => {
    setIsRequireLoaded(true);
  };

  return (
    <>
      <Helmet>
        <script async onLoad={handleOnLoad} src={requireJsSrc} />
      </Helmet>
      {isRequireLoaded && <div dangerouslySetInnerHTML={{ __html: html }} />}
    </>
  );
};

export default Idt1Include;
