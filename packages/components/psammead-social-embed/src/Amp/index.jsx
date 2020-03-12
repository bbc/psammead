import React from 'react';
import { string, shape } from 'prop-types';
import Helmet from 'react-helmet';

import { AmpScripts, AmpComponents } from './Elements';
import SkipLinkWrapper from '../SkipLinkWrapper';
import Notice from '../Notice';

const AmpEmbed = ({ provider, skipLink, id, width, height, fallback }) => {
  const AmpScript = AmpScripts[provider];
  const AmpComponent = AmpComponents[provider];
  return AmpScript && AmpComponent ? (
    <SkipLinkWrapper {...skipLink}>
      <Helmet>
        <AmpScript />
      </Helmet>
      <AmpComponent id={id} width={width} height={height} />
    </SkipLinkWrapper>
  ) : (
    <Notice {...fallback} />
  );
};

AmpEmbed.propTypes = {
  provider: string.isRequired,
  skipLink: shape({
    text: string.isRequired,
    skipToId: string.isRequired,
    endText: string.isRequired,
  }).isRequired,
  id: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
  fallback: shape({
    text: string.isRequired,
    linkText: string.isRequired,
    linkHref: string.isRequired,
    warningText: string,
  }).isRequired,
};

export default AmpEmbed;
