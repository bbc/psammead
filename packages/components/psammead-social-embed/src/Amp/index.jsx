import React from 'react';
import { string, shape } from 'prop-types';
import Helmet from 'react-helmet';

import { scripts, Elements } from './Framework';
import SkipLinkWrapper from '../SkipLinkWrapper';
import Notice from '../Notice';

const AmpEmbed = ({
  provider,
  service,
  skipLink,
  id,
  width,
  height,
  fallback,
}) => {
  const script = scripts[provider];
  const Element = Elements[provider];
  return script && Element ? (
    <SkipLinkWrapper service={service} provider={provider} {...skipLink}>
      <Helmet>
        <script async custom-element={script.customElement} src={script.src} />
      </Helmet>
      <Element id={id} width={width} height={height} />
    </SkipLinkWrapper>
  ) : (
    <Notice service={service} provider={provider} {...fallback} />
  );
};

AmpEmbed.propTypes = {
  provider: string.isRequired,
  service: string.isRequired,
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
