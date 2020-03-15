import React from 'react';
import { shape, func, string } from 'prop-types';
import Helmet from 'react-helmet';

const AmpEmbed = ({ script, render }) => (
  <>
    <Helmet>
      <script async custom-element={script.customElement} src={script.src} />
    </Helmet>
    {render()}
  </>
);

AmpEmbed.propTypes = {
  script: shape({
    customElement: string.isRequired,
    src: string.isRequired,
  }).isRequired,
  render: func.isRequired,
};

export default AmpEmbed;
