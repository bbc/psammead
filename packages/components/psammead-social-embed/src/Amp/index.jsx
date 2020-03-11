import React from 'react';
import { string } from 'prop-types';
import withSkipLink from '../withSkipLink';

const AmpSocial = ({ id }) => <h1>{id}</h1>;

AmpSocial.propTypes = {
  id: string.isRequired,
};

export default withSkipLink(AmpSocial);
