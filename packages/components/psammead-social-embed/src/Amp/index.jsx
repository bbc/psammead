import React from 'react';
import { string } from 'prop-types';

const Amp = ({ id }) => <div>{id}</div>;

Amp.propTypes = {
  id: string.isRequired,
};

export default Amp;
