/* eslint-disable react/no-danger */
import React from 'react';
import { string } from 'prop-types';

const Include = ({ html }) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

Include.propTypes = {
  html: string,
};

Include.defaultProps = {
  html: null,
};

export default Include;
