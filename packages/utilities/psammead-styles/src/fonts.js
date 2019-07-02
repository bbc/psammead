const baseFontUrl = 'https://gel.files.bbci.co.uk/r2.511/';
const nassimPersianBaseUrl =
  'https://ws-downloads.files.bbci.co.uk/fonts/NassimPersian/v1.511/';

// Serif
export const F_REITH_SERIF_REGULAR = `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseFontUrl}BBCReithSerif_W_Rg.woff2") format("woff2"), url("${baseFontUrl}BBCReithSerif_W_Rg.woff") format("woff");
    font-display: optional;
  }`;

export const F_REITH_SERIF_ITALIC = `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseFontUrl}BBCReithSerif_W_It.woff2") format("woff2"), url("${baseFontUrl}BBCReithSerif_W_It.woff") format("woff");
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SERIF_BOLD = `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseFontUrl}BBCReithSerif_W_Bd.woff2") format("woff2"), url("${baseFontUrl}BBCReithSerif_W_Bd.woff") format("woff");
    font-weight: 700;
    font-display: optional;
  }`;

export const F_REITH_SERIF_BOLD_ITALIC = `  
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseFontUrl}BBCReithSerif_W_BdIt.woff2") format("woff2"), url("${baseFontUrl}BBCReithSerif_W_BdIt.woff") format("woff");
    font-weight: 700;
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SERIF_LIGHT = `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseFontUrl}BBCReithSerif_W_Lt.woff2") format("woff2"), url("${baseFontUrl}BBCReithSerif_W_Lt.woff") format("woff");
    font-weight: 300;
    font-display: optional;
  }`;

export const F_REITH_SERIF_LIGHT_ITALIC = `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseFontUrl}BBCReithSerif_W_LtIt.woff2") format("woff2"), url("${baseFontUrl}BBCReithSerif_W_LtIt.woff") format("woff");
    font-weight: 300;
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SERIF_MEDIUM = `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseFontUrl}BBCReithSerif_W_Md.woff2") format("woff2"), url("${baseFontUrl}BBCReithSerif_W_Md.woff") format("woff");
    font-weight: 500;
    font-display: optional;
  }`;

export const F_REITH_SERIF_MEDIUM_ITALIC = `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseFontUrl}BBCReithSerif_W_MdIt.woff2") format("woff2"), url("${baseFontUrl}BBCReithSerif_W_MdIt.woff") format("woff");
    font-weight: 500;
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SERIF_EXTRA_BOLD = `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseFontUrl}BBCReithSerif_W_ExBd.woff2") format("woff2"), url("${baseFontUrl}BBCReithSerif_W_ExBd.woff") format("woff");
    font-weight: 800;
    font-display: optional;
  }`;

export const F_REITH_SERIF_EXTRA_BOLD_ITALIC = `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseFontUrl}BBCReithSerif_W_ExBdIt.woff2") format("woff2"), url("${baseFontUrl}BBCReithSerif_W_ExBdIt.woff") format("woff");
    font-weight: 800;
    font-style: italic;
    font-display: optional;
  }`;

// Sans
export const F_REITH_SANS_REGULAR = `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseFontUrl}BBCReithSans_W_Rg.woff2") format("woff2"), url("${baseFontUrl}BBCReithSans_W_Rg.woff") format("woff");
    font-display: optional;
  }`;

export const F_REITH_SANS_ITALIC = `
    @font-face {
    font-family: "ReithSans";
    src: url("${baseFontUrl}BBCReithSans_W_It.woff2") format("woff2"), url("${baseFontUrl}BBCReithSans_W_It.woff") format("woff");
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SANS_BOLD = `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseFontUrl}BBCReithSans_W_Bd.woff2") format("woff2"), url("${baseFontUrl}BBCReithSans_W_Bd.woff") format("woff");
    font-weight: 700;
    font-display: optional;
  }`;

export const F_REITH_SANS_BOLD_ITALIC = `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseFontUrl}BBCReithSans_W_BdIt.woff2") format("woff2"), url("${baseFontUrl}BBCReithSans_W_BdIt.woff") format("woff");
    font-weight: 700;
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SANS_LIGHT = `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseFontUrl}BBCReithSans_W_Lt.woff2") format("woff2"), url("${baseFontUrl}BBCReithSans_W_Lt.woff") format("woff");
    font-weight: 300;
    font-display: optional;
  }`;

export const F_REITH_SANS_LIGHT_ITALIC = `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseFontUrl}BBCReithSans_W_LtIt.woff2") format("woff2"), url("${baseFontUrl}BBCReithSans_W_LtIt.woff") format("woff");
    font-weight: 300;
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SANS_MEDIUM = `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseFontUrl}BBCReithSans_W_Md.woff2") format("woff2"), url("${baseFontUrl}BBCReithSans_W_Md.woff") format("woff");
    font-weight: 500;
    font-display: optional;
  }`;

export const F_REITH_SANS_MEDIUM_ITALIC = `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseFontUrl}BBCReithSans_W_MdIt.woff2") format("woff2"), url("${baseFontUrl}BBCReithSans_W_MdIt.woff") format("woff");
    font-weight: 500;
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SANS_EXTRA_BOLD = `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseFontUrl}BBCReithSans_W_ExBd.woff2") format("woff2"), url("${baseFontUrl}BBCReithSans_W_ExBd.woff") format("woff");
    font-weight: 800;
    font-display: optional;
  }`;

export const F_REITH_SANS_EXTRA_BOLD_ITALIC = `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseFontUrl}BBCReithSans_W_ExBdIt.woff2") format("woff2"), url("${baseFontUrl}BBCReithSans_W_ExBdIt.woff") format("woff");
    font-weight: 800;
    font-style: italic;
    font-display: optional;
  }`;

// Sans Condensed
export const F_REITH_SANS_CONDENSED_REGULAR = `
    @font-face {
        font-family: "ReithSansCondensed";
        src: url("${baseFontUrl}BBCReithSansCd_W_Rg.woff2") format("woff2"), url("${baseFontUrl}BBCReithSansCd_W_Rg.woff") format("woff");
        font-display: optional;
    }`;

export const F_REITH_SANS_CONDENSED_BOLD = `
    @font-face {
        font-family: "ReithSansCondensed";
        font-weight: 700;
        src: url("${baseFontUrl}BBCReithSansCd_W_Bd.woff2") format("woff2"), url("${baseFontUrl}BBCReithSansCd_W_Bd.woff") format("woff");
        font-display: optional;
    }`;

// Nassim Persian
export const F_NASSIM_PERSIAN_REGULAR = `
  @font-face {
    font-family: "NassimPersian";
    font-weight: 400;
    font-style: normal;
    src: url('${nassimPersianBaseUrl}normal.woff') format('woff'), url('${nassimPersianBaseUrl}normal.eot') format('eot'), url('${nassimPersianBaseUrl}normal.ttf') format('ttf');
    font-display: optional;
  }
`;

export const F_NASSIM_PERSIAN_BOLD = `
  @font-face {
    font-family: "NassimPersian";
    font-weight: 700;
    font-style: normal;
    src: url('${nassimPersianBaseUrl}bold.woff') format('woff'), url('${nassimPersianBaseUrl}bold.eot') format('eot'), url('${nassimPersianBaseUrl}bold.ttf') format('ttf');
    font-display: optional;
  }
`;
