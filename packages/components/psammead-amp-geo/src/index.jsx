import React from 'react';

const ampGeoData = {
  ISOCountryGroups: {
    eea: [
      'at',
      'be',
      'bg',
      'bl',
      'cy',
      'cz',
      'de',
      'dk',
      'ee',
      'es',
      'fi',
      'fr',
      'gb',
      'gf',
      'gg',
      'gi',
      'gp',
      'gr',
      'hr',
      'hu',
      'ie',
      'im',
      'is',
      'it',
      'je',
      'li',
      'lt',
      'lu',
      'lv',
      'mf',
      'mq',
      'mt',
      'nl',
      'no',
      'pl',
      'pm',
      'pt',
      're',
      'ro',
      'se',
      'si',
      'sk',
      'yt',
    ],
  },
};

const jsonInlinedScript = data => (
  <script
    type="application/json"
    /* eslint-disable-next-line react/no-danger */
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

const AmpGeo = () => (
  <amp-geo layout="nodisplay">{jsonInlinedScript(ampGeoData)}</amp-geo>
);

export default AmpGeo;
