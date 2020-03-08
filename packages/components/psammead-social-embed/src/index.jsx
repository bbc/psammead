import withFallback from './withFallback';
import withSkiplink from './withSkiplink';

import Amp from './Amp';
import ampProviders from './Amp/providers.json';

import Canonical from './Canonical';
import canonicalProviders from './Canonical/providers.json';

export const CanonicalSocialEmbed = withFallback(
  withSkiplink(Canonical),
  canonicalProviders,
);
export const AmpSocialEmbed = withFallback(withSkiplink(Amp), ampProviders);
