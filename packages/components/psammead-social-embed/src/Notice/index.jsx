import React from 'react';
import { string } from 'prop-types';

const Notice = ({ message }) => <p>{message}</p>;

Notice.propTypes = {
  message: string.isRequired,
};

export default Notice;
