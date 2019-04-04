/* eslint-disable global-require */
module.exports = {
  latin: require('../dist/scripts/latin-and-cyrillic').default,
  cyrillic: require('../dist/scripts/latin-and-cyrillic').default,
  latinDiacritics: require('../dist/scripts/latin-with-diacritics').default,
  arabic: require('../dist/scripts/arabic').default,
  arabicPashto: require('../dist/scripts/arabic-pashto').default,
  bengali: require('../dist/scripts/bengali').default,
  burmese: require('../dist/scripts/burmese').default,
  hindi: require('../dist/scripts/devanagari-and-gurmukhi').default,
  nepali: require('../dist/scripts/devanagari-and-gurmukhi').default,
  sinhalese: require('../dist/scripts/sinhalese').default,
  tamil: require('../dist/scripts/tamil').default,
  thai: require('../dist/scripts/thai').default,
  chinese: require('../dist/scripts/no-ascenders-or-descenders').default,
  korean: require('../dist/scripts/no-ascenders-or-descenders').default,
  ethiopic: require('../dist/scripts/no-ascenders-or-descenders').default,
};
