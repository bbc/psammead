/* eslint-disable no-unused-vars */
const fs = require('fs');
// Require moment as we extract locales from node_modules.
const moment = require('moment');

// Output from moment.locales() which contains all locales: https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js
const allLocalesNames = [
  'en',
  'af',
  'ar-dz',
  'ar-kw',
  'ar-ly',
  'ar-ma',
  'ar-sa',
  'ar-tn',
  'ar',
  'az',
  'be',
  'bg',
  'bm',
  'bn',
  'bo',
  'br',
  'bs',
  'ca',
  'cs',
  'cv',
  'cy',
  'da',
  'de-at',
  'de-ch',
  'de',
  'dv',
  'el',
  'en-SG',
  'en-au',
  'en-ca',
  'en-gb',
  'en-ie',
  'en-il',
  'en-nz',
  'eo',
  'es-do',
  'es-us',
  'es',
  'et',
  'eu',
  'fa',
  'fi',
  'fo',
  'fr-ca',
  'fr-ch',
  'fr',
  'fy',
  'ga',
  'gd',
  'gl',
  'gom-latn',
  'gu',
  'he',
  'hi',
  'hr',
  'hu',
  'hy-am',
  'id',
  'is',
  'it-ch',
  'it',
  'ja',
  'jv',
  'ka',
  'kk',
  'km',
  'kn',
  'ko',
  'ku',
  'ky',
  'lb',
  'lo',
  'lt',
  'lv',
  'me',
  'mi',
  'mk',
  'ml',
  'mn',
  'mr',
  'ms-my',
  'ms',
  'mt',
  'my',
  'nb',
  'ne',
  'nl-be',
  'nl',
  'nn',
  'pa-in',
  'pl',
  'pt-br',
  'pt',
  'ro',
  'ru',
  'sd',
  'se',
  'si',
  'sk',
  'sl',
  'sq',
  'sr-cyrl',
  'sr',
  'ss',
  'sv',
  'sw',
  'ta',
  'te',
  'tet',
  'tg',
  'th',
  'tl-ph',
  'tlh',
  'tr',
  'tzl',
  'tzm-latn',
  'tzm',
  'ug-cn',
  'uk',
  'ur',
  'uz-latn',
  'uz',
  'vi',
  'x-pseudo',
  'yo',
  'zh-cn',
  'zh-hk',
  'zh-tw',
].filter(name => name !== 'en' && name !== 'tzl');

allLocalesNames.forEach(localeName => {
  try {
    const localeFileContent = fs.readFileSync(
      `../../../node_modules/moment/locale/${localeName}.js`,
      'utf8',
    );

    // Regex to find object content:
    const extractedContent = localeFileContent.match(
      /(moment.defineLocale.*\{)((.|\n)*)((\}(.|\n)*)return)/,
    )[2];

    // Regex to find helper functions / variables used by object
    const closuredContent = localeFileContent.match(
      /use strict';((.|\n)*)var .* moment.defineLocale/,
    )[1];

    // Replace Moment.js .month() calls:
    const extractedContentCleaned = extractedContent.replace(/.month\(\)/g, '');

    const exportString = `/* eslint-disable */
// Data extracted from https://github.com/moment/moment/tree/2.24.0/locale
${closuredContent}
export default { ${extractedContentCleaned} };`;

    fs.writeFileSync(`./locales/moment-extract/${localeName}.js`, exportString);
    console.log(`Locale ${localeName} exported successfully`);
  } catch (e) {
    console.log(`Error exporting locale ${localeName}`, e);
  }
});
