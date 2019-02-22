const fontFamilyBase = ', Helvetica, Arial, sans-serif';
const baseFontUrl = 'https://gel.files.bbci.co.uk/r2.302/';

export const FF_SERIF = `ReithSerif${fontFamilyBase}`;
export const FF_SANS = `ReithSans${fontFamilyBase}`;
export const FF_SANS_COND = `ReithSansCondensed${fontFamilyBase}`;

// Serif
export const T_REITH_SERIF_REGULAR = `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseFontUrl}BBCReithSerif_W_Rg.woff2") format("woff2"), url("${baseFontUrl}BBCReithSerif_W_Rg.woff") format("woff");
    font-display: optional;
  }`;

export const T_REITH_SERIF_ITALIC = `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseFontUrl}BBCReithSerif_W_It.woff2") format("woff2"), url("${baseFontUrl}BBCReithSerif_W_It.woff") format("woff");
    font-style: italic;
    font-display: optional;
  }`;

export const T_REITH_SERIF_BOLD = `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseFontUrl}BBCReithSerif_W_Bd.woff2") format("woff2"), url("${baseFontUrl}BBCReithSerif_W_Bd.woff") format("woff");
    font-weight: bold;
    font-display: optional;
  }`;

export const T_REITH_SERIF_BOLD_ITALIC = `  
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseFontUrl}BBCReithSerif_W_BdIt.woff2") format("woff2"), url("${baseFontUrl}BBCReithSerif_W_BdIt.woff") format("woff");
    font-weight: bold;
    font-style: italic;
    font-display: optional;
  }`;

export const T_REITH_SERIF_LIGHT = `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseFontUrl}BBCReithSerif_W_Lt.woff2") format("woff2"), url("${baseFontUrl}BBCReithSerif_W_Lt.woff") format("woff");
    font-weight: 300;
    font-display: optional;
  }`;

export const T_REITH_SERIF_LIGHT_ITALIC = `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseFontUrl}BBCReithSerif_W_LtIt.woff2") format("woff2"), url("${baseFontUrl}BBCReithSerif_W_LtIt.woff") format("woff");
    font-weight: 300;
    font-style: italic;
    font-display: optional;
  }`;

export const T_REITH_SERIF_MEDIUM = `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseFontUrl}BBCReithSerif_W_Md.woff2") format("woff2"), url("${baseFontUrl}BBCReithSerif_W_Md.woff") format("woff");
    font-weight: 500;
    font-display: optional;
  }`;

export const T_REITH_SERIF_MEDIUM_ITALIC = `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseFontUrl}BBCReithSerif_W_MdIt.woff2") format("woff2"), url("${baseFontUrl}BBCReithSerif_W_MdIt.woff") format("woff");
    font-weight: 500;
    font-style: italic;
    font-display: optional;
  }`;

export const T_REITH_SERIF_EXTRA_BOLD = `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseFontUrl}BBCReithSerif_W_ExBd.woff2") format("woff2"), url("${baseFontUrl}BBCReithSerif_W_ExBd.woff") format("woff");
    font-weight: 800;
    font-display: optional;
  }`;

export const T_REITH_SERIF_EXTRA_BOLD_ITALIC = `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseFontUrl}BBCReithSerif_W_ExBdIt.woff2") format("woff2"), url("${baseFontUrl}BBCReithSerif_W_ExBdIt.woff") format("woff");
    font-weight: 800;
    font-style: italic;
    font-display: optional;
  }`;

// Sans
export const T_REITH_SANS_REGULAR = `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseFontUrl}BBCReithSans_W_Rg.woff2") format("woff2"), url("${baseFontUrl}BBCReithSans_W_Rg.woff") format("woff");
    font-display: optional;
  }`;

export const T_REITH_SANS_ITALIC = `
    @font-face {
    font-family: "ReithSans";
    src: url("${baseFontUrl}BBCReithSans_W_It.woff2") format("woff2"), url("${baseFontUrl}BBCReithSans_W_It.woff") format("woff");
    font-style: italic;
    font-display: optional;
  }
`;

export const T_REITH_SANS_BOLD = `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseFontUrl}BBCReithSans_W_Bd.woff2") format("woff2"), url("${baseFontUrl}BBCReithSans_W_Bd.woff") format("woff");
    font-weight: bold;
    font-display: optional;
  }
  `;

export const T_REITH_SANS_BOLD_ITALIC = `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseFontUrl}BBCReithSans_W_BdIt.woff2") format("woff2"), url("${baseFontUrl}BBCReithSans_W_BdIt.woff") format("woff");
    font-weight: bold;
    font-style: italic;
    font-display: optional;
  }
  `;

export const T_REITH_SANS_LIGHT = `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseFontUrl}BBCReithSans_W_Lt.woff2") format("woff2"), url("${baseFontUrl}BBCReithSans_W_Lt.woff") format("woff");
    font-weight: 300;
    font-display: optional;
  }`;

export const T_REITH_SANS_LIGHT_ITALIC = `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseFontUrl}BBCReithSans_W_LtIt.woff2") format("woff2"), url("${baseFontUrl}BBCReithSans_W_LtIt.woff") format("woff");
    font-weight: 300;
    font-style: italic;
    font-display: optional;
  }`;

export const T_REITH_SANS_MEDIUM = `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseFontUrl}BBCReithSans_W_Md.woff2") format("woff2"), url("${baseFontUrl}BBCReithSans_W_Md.woff") format("woff");
    font-weight: 500;
    font-display: optional;
  }`;

export const T_REITH_SANS_MEDIUM_ITALIC = `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseFontUrl}BBCReithSans_W_MdIt.woff2") format("woff2"), url("${baseFontUrl}BBCReithSans_W_MdIt.woff") format("woff");
    font-weight: 500;
    font-style: italic;
    font-display: optional;
  }`;

export const T_REITH_SANS_EXTRA_BOLD = `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseFontUrl}BBCReithSans_W_ExBd.woff2") format("woff2"), url("${baseFontUrl}BBCReithSans_W_ExBd.woff") format("woff");
    font-weight: 800;
    font-display: optional;
  }`;

export const T_REITH_SANS_EXTRA_BOLD_ITALIC = `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseFontUrl}BBCReithSans_W_ExBdIt.woff2") format("woff2"), url("${baseFontUrl}BBCReithSans_W_ExBdIt.woff") format("woff");
    font-weight: 800;
    font-style: italic;
    font-display: optional;
  }`;

// Sans Condensed
export const T_REITH_SANS_CONDENSED_REGULAR = `
    @font-face {
        font-family: "ReithSansCondensed";
        src: url("${baseFontUrl}BBCReithSansCd_W_Rg.woff2") format("woff2"), url("${baseFontUrl}BBCReithSansCd_W_Rg.woff") format("woff");
        font-display: optional;
    }`;

export const T_REITH_SANS_CONDENSED_BOLD = `
    @font-face {
        font-family: "ReithSansCondensed";
        font-weight: bold;
        src: url("${baseFontUrl}BBCReithSansCd_W_Bd.woff2") format("woff2"), url("${baseFontUrl}BBCReithSansCd_W_Bd.woff") format("woff");
        font-display: optional;
    }`;
