import withFallback from './withFallback';
import withSkipLink from './withSkipLink';

import Amp from './Amp';
import ampProviders from './Amp/providers.json';

import Canonical from './Canonical';
import canonicalProviders from './Canonical/providers.json';

export const CanonicalSocialEmbed = withFallback(
  withSkipLink(Canonical),
  canonicalProviders,
);
export const AmpSocialEmbed = withFallback(withSkipLink(Amp), ampProviders);
