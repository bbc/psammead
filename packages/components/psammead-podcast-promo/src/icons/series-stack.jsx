import React from 'react';
import { string } from 'prop-types';

const SeriesStack = ({ className }) => (
  <svg
    className={className}
    tabIndex="-1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
  >
    <title>series-stack</title>
    <polygon points="4 6 11.1 6 26 6 26 28 28 28 28 4 4 4 4 6" />
    <polygon points="8 0 8 2 30 2 30 24 32 24 32 0 8 0" />
    <path d="M0,32H24V8H0ZM4,12H20V28H4Z" />
  </svg>
);

SeriesStack.propTypes = {
  className: string,
};

SeriesStack.defaultProps = {
  className: '',
};

export default SeriesStack;
