import React, { Fragment } from 'react';
import GlobalStyles from '@bbc/psammead-styles/global-styles';
import * as fontFaces from '@bbc/psammead-styles/fonts';

// New locales
import '@bbc/psammead-locales/moment/am';
import '@bbc/psammead-locales/moment/ha';
import '@bbc/psammead-locales/moment/ig';
import '@bbc/psammead-locales/moment/om';
import '@bbc/psammead-locales/moment/pcm';
import '@bbc/psammead-locales/moment/ps';
import '@bbc/psammead-locales/moment/rw';
import '@bbc/psammead-locales/moment/so';
import '@bbc/psammead-locales/moment/ti';

// Updated locales
import '@bbc/psammead-locales/moment/ar';
import '@bbc/psammead-locales/moment/az';
import '@bbc/psammead-locales/moment/bn';
import '@bbc/psammead-locales/moment/es';
import '@bbc/psammead-locales/moment/gu';
import '@bbc/psammead-locales/moment/hi';
import '@bbc/psammead-locales/moment/ky';
import '@bbc/psammead-locales/moment/mr';
import '@bbc/psammead-locales/moment/ne';
import '@bbc/psammead-locales/moment/pa-in';
import '@bbc/psammead-locales/moment/pt-br';
import '@bbc/psammead-locales/moment/ru';
import '@bbc/psammead-locales/moment/si';
import '@bbc/psammead-locales/moment/sr';
import '@bbc/psammead-locales/moment/sr-cyrl';
import '@bbc/psammead-locales/moment/sw';
import '@bbc/psammead-locales/moment/ta';
import '@bbc/psammead-locales/moment/th';
import '@bbc/psammead-locales/moment/uk';
import '@bbc/psammead-locales/moment/ur';
import '@bbc/psammead-locales/moment/uz';
import '@bbc/psammead-locales/moment/yo';

const fontPathMap = [
  { prefix: 'F_REITH', path: 'fonts/Reith/' },
  { prefix: 'F_NASSIM_ARABIC', path: 'fonts/Nassim/Arabic/' },
  { prefix: 'F_NASSIM_PASHTO', path: 'fonts/Nassim/Pashto/' },
  { prefix: 'F_NASSIM_PERSIAN', path: 'fonts/Nassim/Persian/' },
  { prefix: 'F_NASSIM_URDU', path: 'fonts/Nassim/Urdu/' },
  { prefix: 'F_ISKOOLA_POTA_BBC', path: 'fonts/IskoolaPota/' },
  { prefix: 'F_LATHA', path: 'fonts/Latha/' },
  { prefix: 'F_MALLANNA', path: 'fonts/Mallanna/' },
  { prefix: 'F_NOTO_SANS_ETHIOPIC', path: 'fonts/NotoSansEthiopic/' },
  { prefix: 'F_PADAUK', path: 'fonts/Padauk/' },
  { prefix: 'F_SHONAR_BANGLA', path: 'fonts/ShonarBangla/' },
];

export default (story, { parameters }) => {
  return (
    <Fragment>
      <GlobalStyles
        fonts={Object.values(fontFaces).map(fontFace => {
          const fontMap =
            fontPathMap.find(map => fontFace.name.includes(map.prefix)) ||
            fontPathMap[0];
          return fontFace(fontMap.path);
        })}
      />
      {story()}
    </Fragment>
  );
};
