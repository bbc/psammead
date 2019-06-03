const baseFontUrl = 'https://ws-downloads.files.bbci.co.uk/fonts/';
const gelBaseFontUrl = 'https://gel.files.bbci.co.uk/r2.511/';

export const persian = {
  sansBold: `@font-face {
    font-family: NassimPersian;
    font-weight: 700;
    font-style: normal;
    src: url('${baseFontUrl}NassimPersian/v1.051/bold.woff') format('woff'), url('${baseFontUrl}NassimPersian/v1.051/bold.eot') format('eot'), url('${baseFontUrl}NassimPersian/v1.051/bold.ttf') format('ttf');
    font-display: optional;
  }`,
  sansRegular: `@font-face {
    font-family: NassimPersian;
    font-weight: 400;
    font-style: normal;
    src: url('${baseFontUrl}NassimPersian/latest/normal.woff') format('woff'), url('${baseFontUrl}NassimPersian/latest/normal.eot') format('eot'), url('${baseFontUrl}NassimPersian/latest/normal.ttf') format('ttf');
    font-display: optional;
  }`,
};

export const arabic = {
  sansBold: `@font-face {
    font-family: NassimArabic;
    font-weight: 700;
    font-style: normal;
    src: url('${baseFontUrl}NassimArabic/v1.044/bold.woff') format('woff'), url('${baseFontUrl}NassimArabic/v1.044/bold.eot') format('eot'), url('${baseFontUrl}NassimArabic/v1.044/bold.ttf') format('ttf');
    font-display: optional;
  }`,
  sansRegular: `@font-face {
    font-family: NassimArabic;
    font-weight: 400;
    font-style: normal;
    src: url('${baseFontUrl}NassimArabic/v1.044/normal.woff') format('woff'), url('${baseFontUrl}NassimArabic/v1.044/normal.eot') format('eot'), url('${baseFontUrl}NassimArabic/v1.044/normal.ttf') format('ttf');
    font-display: optional;
  }`,
};

export const news = {
  sansBold: `@font-face {
    font-family: "ReithSans";
    font-weight: 700;
    font-style: normal;
    src: url("${gelBaseFontUrl}BBCReithSans_W_Bd.woff2") format("woff2"), url("${gelBaseFontUrl}BBCReithSans_W_Bd.woff") format("woff");
    font-display: optional;
  }`,
  sansBoldItalic: `@font-face {
    font-family: "ReithSans";
    font-weight: 700;
    font-style: italic;
    src: url("${gelBaseFontUrl}BBCReithSans_W_BdIt.woff2") format("woff2"), url("${gelBaseFontUrl}BBCReithSans_W_BdIt.woff") format("woff");
    font-display: optional;
  }`,
  sansRegular: `@font-face {
    font-family: "ReithSans";
    font-weight: 400;
    font-style: normal;
    src: url("${gelBaseFontUrl}BBCReithSans_W_Rg.woff2") format("woff2"), url("${gelBaseFontUrl}BBCReithSans_W_Rg.woff") format("woff");
    font-display: optional;
  }`,
  sansItalic: `@font-face {
    font-family: "ReithSans";
    font-weight: 400;
    font-style: italic;
    src: url("${gelBaseFontUrl}BBCReithSans_W_It.woff2") format("woff2"), url("${gelBaseFontUrl}BBCReithSans_W_It.woff") format("woff");
    font-display: optional;
  }`,
  serifMedium: `@font-face {
    font-family: "ReithSerif";
    font-weight: 500;
    font-style: normal;
    src: url("${gelBaseFontUrl}BBCReithSerif_W_Md.woff2") format("woff2"), url("${gelBaseFontUrl}BBCReithSerif_W_Md.woff") format("woff");
    font-display: optional;
  }`,
  serifMediumItalic: `@font-face {
    font-family: "ReithSerif";
    font-weight: 500;
    font-style: italic;
    src: url("${gelBaseFontUrl}BBCReithSerif_W_MdIt.woff2") format("woff2"), url("${gelBaseFontUrl}BBCReithSerif_W_MdIt.woff") format("woff");
    font-display: optional;
  }`,
  serifBold: `@font-face {
    font-family: "ReithSerif";
    font-weight: 700;
    font-style: normal;
    src: url("${gelBaseFontUrl}BBCReithSerif_W_Bd.woff2") format("woff2"), url("${gelBaseFontUrl}BBCReithSerif_W_Bd.woff") format("woff");
    font-display: optional;
  }`,
  serifBoldItalic: `@font-face {
    font-family: "ReithSerif";
    font-weight: 700;
    font-style: italic;
    src: url("${gelBaseFontUrl}BBCReithSerif_W_BdIt.woff2") format("woff2"), url("${gelBaseFontUrl}BBCReithSerif_W_BdIt.woff") format("woff");
    font-display: optional;
  }`,
};
