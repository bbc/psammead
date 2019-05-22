const baseFontUrl = 'https://ws-downloads.files.bbci.co.uk/fonts/';

export const persian = {
  sansBold: `@font-face {
    font-family: NassimPersian, Arial, Verdana,	Geneva,	Helvetica, sans serif;
    font-weight: 700;
    font-style: normal;
    src: url('${baseFontUrl}NassimPersian/latest/bold.woff') format('woff'), url('${baseFontUrl}NassimPersian/latest/bold.eot') format('eot'), url('${baseFontUrl}NassimPersian/latest/bold.ttf') format('ttf');
    font-display: optional;
  }`,
  sansRegular: `@font-face {
    font-family: NassimPersian, Arial, Verdana,	Geneva,	Helvetica, sans serif;
    font-weight: 400;
    font-style: normal;
    src: url('${baseFontUrl}NassimPersian/latest/normal.woff') format('woff'), url('${baseFontUrl}NassimPersian/latest/normal.eot') format('eot'), url('${baseFontUrl}NassimPersian/latest/normal.ttf') format('ttf');
    font-display: optional;
  }`,
};

export const arabic = {
  sansBold: `@font-face {
    font-family: NassimArabic, Arial, Verdana,	Geneva,	Helvetica, sans serif;
    font-weight: 700;
    font-style: normal;
    src: url('${baseFontUrl}NassimArabic/latest/bold.woff') format('woff'), url('${baseFontUrl}NassimArabic/latest/bold.eot') format('eot'), url('${baseFontUrl}NassimArabic/latest/bold.ttf') format('ttf');
    font-display: optional;
  }`,
  sansRegular: `@font-face {
    font-family: NassimArabic, Arial, Verdana,	Geneva,	Helvetica, sans serif;
    font-weight: 400;
    font-style: normal;
    src: url('${baseFontUrl}NassimArabic/latest/normal.woff') format('woff'), url('${baseFontUrl}NassimArabic/latest/normal.eot') format('eot'), url('${baseFontUrl}NassimArabic/latest/normal.ttf') format('ttf');
    font-display: optional;
  }`,
};

export const news = {
  sansBold: `@font-face {
    font-family: "ReithSans";
    font-weight: 700;
    font-style: normal;
    src: url('${baseFontUrl}ReithSans/latest/bold.woff2') format('woff2'), url('${baseFontUrl}ReithSans/latest/bold.woff') format('woff');
    font-display: optional;
  }`,
  sansBoldItalic: `@font-face {
    font-family: "ReithSans";
    font-weight: 700;
    font-style: italic;
    src: url('${baseFontUrl}ReithSans/latest/bold-italic.woff2') format('woff2'), url('${baseFontUrl}ReithSans/latest/bold-italic.woff') format('woff');
    font-display: optional;
  }`,
  sansRegular: `@font-face {
    font-family: "ReithSans";
    font-weight: 400;
    font-style: normal;
    src: url('${baseFontUrl}ReithSans/latest/normal.woff2') format('woff2'), url('${baseFontUrl}ReithSans/latest/normal.woff') format('woff');
    font-display: optional;
  }`,
  sansItalic: `@font-face {
    font-family: "ReithSans";
    font-weight: 400;
    font-style: italic;
    src: url('${baseFontUrl}ReithSans/latest/normal-italic.woff2') format('woff2'), url('${baseFontUrl}ReithSans/latest/normal-italic.woff') format('woff');
    font-display: optional;
  }`,
  serifMedium: `@font-face {
    font-family: "ReithSerif";
    font-weight: 500;
    font-style: normal;
    src: url('${baseFontUrl}ReithSerif/latest/medium.woff2') format('woff2'), url('${baseFontUrl}ReithSerif/latest/medium.woff') format('woff');
    font-display: optional;
  }`,
  serifMediumItalic: `@font-face {
    font-family: "ReithSerif";
    font-weight: 500;
    font-style: italic;
    src: url('${baseFontUrl}ReithSerif/latest/medium-italic.woff2') format('woff2'), url('${baseFontUrl}ReithSerif/latest/medium-italic.woff') format('woff');
    font-display: optional;
  }`,
  serifBold: `@font-face {
    font-family: "ReithSerif";
    font-weight: 700;
    font-style: normal;
    src: url('${baseFontUrl}ReithSerif/latest/bold.woff2') format('woff2'), url('${baseFontUrl}ReithSerif/latest/bold.woff') format('woff');
    font-display: optional;
  }`,
  serifBoldItalic: `@font-face {
    font-family: "ReithSerif";
    font-weight: 700;
    font-style: italic;
    src: url('${baseFontUrl}ReithSerif/latest/bold-italic.woff2') format('woff2'), url('${baseFontUrl}ReithSerif/latest/bold-italic.woff') format('woff');
    font-display: optional;
  }`,
};
