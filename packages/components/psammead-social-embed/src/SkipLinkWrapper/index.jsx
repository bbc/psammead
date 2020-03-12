import React from 'react';
import { node, string } from 'prop-types';

const SkipLinkWrapper = ({ skipToId, text, children, endText }) => {
  return (
    <div>
      <a href={`#${skipToId}`}>{text}</a>
      {children}
      <p id={skipToId}>{endText}</p>
    </div>
  );
};

SkipLinkWrapper.propTypes = {
  skipToId: string.isRequired,
  children: node.isRequired,
  text: string.isRequired,
  endText: string.isRequired,
};

export default SkipLinkWrapper;
