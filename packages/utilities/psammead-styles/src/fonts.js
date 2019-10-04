const baseFontUrl = 'https://gel.files.bbci.co.uk/r2.511/';

const baseUrlBBCNassimArabic =
  'https://ws-downloads.files.bbci.co.uk/fonts/NassimArabic/v1.441/';

const baseUrlBBCNassimPashto =
  'https://ws-downloads.files.bbci.co.uk/fonts/NassimPashto/v1.57/';

const baseUrlBBCNassimPersian =
  'https://ws-downloads.files.bbci.co.uk/fonts/NassimPersian/v1.511/';

const baseUrlBBCNassimUrdu =
  'https://ws-downloads.files.bbci.co.uk/fonts/NassimUrdu/v1.60/';

const baseUrlIskoolaPotaBBC =
  'https://ws-downloads.files.bbci.co.uk/fonts/IskoolaPota/v5.91/';

const baseUrlLatha = 'https://ws-downloads.files.bbci.co.uk/fonts/Latha/v5.90/';

const baseUrlMallanna =
  'https://ws-downloads.files.bbci.co.uk/fonts/Mallanna/v1.0.4/';

const baseUrlNotoSansEthiopic =
  'https://ws-downloads.files.bbci.co.uk/fonts/NotoSansEthiopic/v1.901/';

const baseUrlPadauk =
  'https://ws-downloads.files.bbci.co.uk/fonts/Padauk/v2.8/';

const baseUrlShonarBangla =
  'https://ws-downloads.files.bbci.co.uk/fonts/ShonarBangla/v5.91/';

// Reith Serif
export const F_REITH_SERIF_REGULAR = (baseUrlOverride = baseFontUrl) => `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseUrlOverride}BBCReithSerif_W_Rg.woff2") format("woff2"), url("${baseUrlOverride}BBCReithSerif_W_Rg.woff") format("woff");
    font-display: optional;
  }`;

export const F_REITH_SERIF_ITALIC = (baseUrlOverride = baseFontUrl) => `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseUrlOverride}BBCReithSerif_W_It.woff2") format("woff2"), url("${baseUrlOverride}BBCReithSerif_W_It.woff") format("woff");
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SERIF_BOLD = (baseUrlOverride = baseFontUrl) => `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseUrlOverride}BBCReithSerif_W_Bd.woff2") format("woff2"), url("${baseUrlOverride}BBCReithSerif_W_Bd.woff") format("woff");
    font-weight: 700;
    font-display: optional;
  }`;

export const F_REITH_SERIF_BOLD_ITALIC = (baseUrlOverride = baseFontUrl) => `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseUrlOverride}BBCReithSerif_W_BdIt.woff2") format("woff2"), url("${baseUrlOverride}BBCReithSerif_W_BdIt.woff") format("woff");
    font-weight: 700;
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SERIF_LIGHT = (baseUrlOverride = baseFontUrl) => `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseUrlOverride}BBCReithSerif_W_Lt.woff2") format("woff2"), url("${baseUrlOverride}BBCReithSerif_W_Lt.woff") format("woff");
    font-weight: 300;
    font-display: optional;
  }`;

export const F_REITH_SERIF_LIGHT_ITALIC = (baseUrlOverride = baseFontUrl) => `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseUrlOverride}BBCReithSerif_W_LtIt.woff2") format("woff2"), url("${baseUrlOverride}BBCReithSerif_W_LtIt.woff") format("woff");
    font-weight: 300;
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SERIF_MEDIUM = (baseUrlOverride = baseFontUrl) => `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseUrlOverride}BBCReithSerif_W_Md.woff2") format("woff2"), url("${baseUrlOverride}BBCReithSerif_W_Md.woff") format("woff");
    font-weight: 500;
    font-display: optional;
  }`;

export const F_REITH_SERIF_MEDIUM_ITALIC = (baseUrlOverride = baseFontUrl) => `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseUrlOverride}BBCReithSerif_W_MdIt.woff2") format("woff2"), url("${baseUrlOverride}BBCReithSerif_W_MdIt.woff") format("woff");
    font-weight: 500;
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SERIF_EXTRA_BOLD = (baseUrlOverride = baseFontUrl) => `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseUrlOverride}BBCReithSerif_W_ExBd.woff2") format("woff2"), url("${baseUrlOverride}BBCReithSerif_W_ExBd.woff") format("woff");
    font-weight: 800;
    font-display: optional;
  }`;

export const F_REITH_SERIF_EXTRA_BOLD_ITALIC = (
  baseUrlOverride = baseFontUrl,
) => `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseUrlOverride}BBCReithSerif_W_ExBdIt.woff2") format("woff2"), url("${baseUrlOverride}BBCReithSerif_W_ExBdIt.woff") format("woff");
    font-weight: 800;
    font-style: italic;
    font-display: optional;
  }`;

// Reith Sans

export const F_REITH_SANS_REGULAR = (baseUrlOverride = baseFontUrl) => `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseUrlOverride}BBCReithSans_W_Rg.woff2") format("woff2"), url("${baseUrlOverride}BBCReithSans_W_Rg.woff") format("woff");
    font-display: optional;
  }`;

export const F_REITH_SANS_ITALIC = (baseUrlOverride = baseFontUrl) => `
    @font-face {
    font-family: "ReithSans";
    src: url("${baseUrlOverride}BBCReithSans_W_It.woff2") format("woff2"), url("${baseUrlOverride}BBCReithSans_W_It.woff") format("woff");
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SANS_BOLD = (baseUrlOverride = baseFontUrl) => `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseUrlOverride}BBCReithSans_W_Bd.woff2") format("woff2"), url("${baseUrlOverride}BBCReithSans_W_Bd.woff") format("woff");
    font-weight: 700;
    font-display: optional;
  }`;

export const F_REITH_SANS_BOLD_ITALIC = (baseUrlOverride = baseFontUrl) => `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseUrlOverride}BBCReithSans_W_BdIt.woff2") format("woff2"), url("${baseUrlOverride}BBCReithSans_W_BdIt.woff") format("woff");
    font-weight: 700;
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SANS_LIGHT = (baseUrlOverride = baseFontUrl) => `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseUrlOverride}BBCReithSans_W_Lt.woff2") format("woff2"), url("${baseUrlOverride}BBCReithSans_W_Lt.woff") format("woff");
    font-weight: 300;
    font-display: optional;
  }`;

export const F_REITH_SANS_LIGHT_ITALIC = (baseUrlOverride = baseFontUrl) => `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseUrlOverride}BBCReithSans_W_LtIt.woff2") format("woff2"), url("${baseUrlOverride}BBCReithSans_W_LtIt.woff") format("woff");
    font-weight: 300;
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SANS_MEDIUM = (baseUrlOverride = baseFontUrl) => `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseUrlOverride}BBCReithSans_W_Md.woff2") format("woff2"), url("${baseUrlOverride}BBCReithSans_W_Md.woff") format("woff");
    font-weight: 500;
    font-display: optional;
  }`;

export const F_REITH_SANS_MEDIUM_ITALIC = (baseUrlOverride = baseFontUrl) => `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseUrlOverride}BBCReithSans_W_MdIt.woff2") format("woff2"), url("${baseUrlOverride}BBCReithSans_W_MdIt.woff") format("woff");
    font-weight: 500;
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SANS_EXTRA_BOLD = (baseUrlOverride = baseFontUrl) => `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseUrlOverride}BBCReithSans_W_ExBd.woff2") format("woff2"), url("${baseUrlOverride}BBCReithSans_W_ExBd.woff") format("woff");
    font-weight: 800;
    font-display: optional;
  }`;

export const F_REITH_SANS_EXTRA_BOLD_ITALIC = (
  baseUrlOverride = baseFontUrl,
) => `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseUrlOverride}BBCReithSans_W_ExBdIt.woff2") format("woff2"), url("${baseUrlOverride}BBCReithSans_W_ExBdIt.woff") format("woff");
    font-weight: 800;
    font-style: italic;
    font-display: optional;
  }`;

// Reith Sans Condensed
export const F_REITH_SANS_CONDENSED_REGULAR = (
  baseUrlOverride = baseFontUrl,
) => `
  @font-face {
      font-family: "ReithSansCondensed";
      src: url("${baseUrlOverride}BBCReithSansCd_W_Rg.woff2") format("woff2"), url("${baseUrlOverride}BBCReithSansCd_W_Rg.woff") format("woff");
      font-display: optional;
  }`;

export const F_REITH_SANS_CONDENSED_BOLD = (baseUrlOverride = baseFontUrl) => `
  @font-face {
      font-family: "ReithSansCondensed";
      font-weight: 700;
      src: url("${baseUrlOverride}BBCReithSansCd_W_Bd.woff2") format("woff2"), url("${baseUrlOverride}BBCReithSansCd_W_Bd.woff") format("woff");
      font-display: optional;
  }`;

// BBC Nassim Arabic

export const F_NASSIM_ARABIC_REGULAR = (
  baseUrlOverride = baseUrlBBCNassimArabic,
) => `
  @font-face {
    font-family: "BBC Nassim Arabic";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlOverride}normal.woff') format('woff'), url('${baseUrlOverride}normal.eot') format('eot'), url('${baseUrlOverride}normal.ttf') format('ttf');
    font-display: optional;
  }
`;

export const F_NASSIM_ARABIC_BOLD = (
  baseUrlOverride = baseUrlBBCNassimArabic,
) => `
  @font-face {
    font-family: "BBC Nassim Arabic";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlOverride}bold.woff') format('woff'), url('${baseUrlOverride}bold.eot') format('eot'), url('${baseUrlOverride}bold.ttf') format('ttf');
    font-display: optional;
  }
`;

// BBC Nassim Pashto

export const F_NASSIM_PASHTO_REGULAR = (
  baseUrlOverride = baseUrlBBCNassimPashto,
) => `
  @font-face {
    font-family: "BBC Nassim Pashto";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlOverride}normal.woff') format('woff'), url('${baseUrlOverride}normal.eot') format('eot'), url('${baseUrlOverride}normal.ttf') format('ttf');
    font-display: optional;
  }
`;

export const F_NASSIM_PASHTO_BOLD = (
  baseUrlOverride = baseUrlBBCNassimPashto,
) => `
  @font-face {
    font-family: "BBC Nassim Pashto";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlOverride}bold.woff') format('woff'), url('${baseUrlOverride}bold.eot') format('eot'), url('${baseUrlOverride}bold.ttf') format('ttf');
    font-display: optional;
  }
`;

// BBC Nassim Persian

export const F_NASSIM_PERSIAN_REGULAR = (
  baseUrlOverride = baseUrlBBCNassimPersian,
) => `
  @font-face {
    font-family: "BBC Nassim Persian";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlOverride}normal.woff') format('woff'), url('${baseUrlOverride}normal.eot') format('eot'), url('${baseUrlOverride}normal.ttf') format('ttf');
    font-display: optional;
  }
`;

export const F_NASSIM_PERSIAN_BOLD = (
  baseUrlOverride = baseUrlBBCNassimPersian,
) => `
  @font-face {
    font-family: "BBC Nassim Persian";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlOverride}bold.woff') format('woff'), url('${baseUrlOverride}bold.eot') format('eot'), url('${baseUrlOverride}bold.ttf') format('ttf');
    font-display: optional;
  }
`;

// BBC Nassim Urdu

export const F_NASSIM_URDU_REGULAR = (
  baseUrlOverride = baseUrlBBCNassimUrdu,
) => `
  @font-face {
    font-family: "BBC Nassim Urdu";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlOverride}normal.woff') format('woff'), url('${baseUrlOverride}normal.eot') format('eot'), url('${baseUrlOverride}normal.ttf') format('ttf');
    font-display: optional;
  }
`;

export const F_NASSIM_URDU_BOLD = (baseUrlOverride = baseUrlBBCNassimUrdu) => `
  @font-face {
    font-family: "BBC Nassim Urdu";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlOverride}bold.woff') format('woff'), url('${baseUrlOverride}bold.eot') format('eot'), url('${baseUrlOverride}bold.ttf') format('ttf');
    font-display: optional;
  }
`;

// Iskoola Pota BBC

export const F_ISKOOLA_POTA_BBC_REGULAR = (
  baseUrlOverride = baseUrlIskoolaPotaBBC,
) => `
  @font-face {
    font-family: "Iskoola Pota BBC";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlOverride}normal.woff') format('woff'), url('${baseUrlOverride}normal.eot') format('eot'), url('${baseUrlOverride}normal.ttf') format('ttf');
    font-display: swap;
  }`;

export const F_ISKOOLA_POTA_BBC_BOLD = (
  baseUrlOverride = baseUrlIskoolaPotaBBC,
) => `
  @font-face {
    font-family: "Iskoola Pota BBC";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlOverride}bold.woff') format('woff'), url('${baseUrlOverride}bold.eot') format('eot'), url('${baseUrlOverride}bold.ttf') format('ttf');
    font-display: swap;
  }
`;

// Latha

export const F_LATHA_REGULAR = (baseUrlOverride = baseUrlLatha) => `
  @font-face {
    font-family: "Latha";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlOverride}normal.woff') format('woff'), url('${baseUrlOverride}normal.eot') format('eot'), url('${baseUrlOverride}normal.ttf') format('ttf');
    font-display: swap;
  }`;

export const F_LATHA_BOLD = (baseUrlOverride = baseUrlLatha) => `
  @font-face {
    font-family: "Latha";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlOverride}bold.woff') format('woff'), url('${baseUrlOverride}bold.eot') format('eot'), url('${baseUrlOverride}bold.ttf') format('ttf');
    font-display: swap;
  }
`;

// Mallanna

export const F_MALLANNA_REGULAR = (baseUrlOverride = baseUrlMallanna) => `
  @font-face {
    font-family: "Mallanna";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlOverride}normal.woff') format('woff'), url('${baseUrlOverride}normal.eot') format('eot'), url('${baseUrlOverride}normal.ttf') format('ttf');
    font-display: swap;
  }
`;

// Noto Sans Ethiopic

export const F_NOTO_SANS_ETHIOPIC_REGULAR = (
  baseUrlOverride = baseUrlNotoSansEthiopic,
) => `
  @font-face {
    font-family: "Noto Sans Ethiopic";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlOverride}normal.woff') format('woff'), url('${baseUrlOverride}normal.eot') format('eot'), url('${baseUrlOverride}normal.ttf') format('ttf');
    font-display: swap;
  }
  `;

export const F_NOTO_SANS_ETHIOPIC_BOLD = (
  baseUrlOverride = baseUrlNotoSansEthiopic,
) => `
  @font-face {
    font-family: "Noto Sans Ethiopic";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlOverride}bold.woff') format('woff'), url('${baseUrlOverride}bold.eot') format('eot'), url('${baseUrlOverride}bold.ttf') format('ttf');
    font-display: swap;
  }
`;

// Padauk

export const F_PADAUK_REGULAR = (baseUrlOverride = baseUrlPadauk) => `
  @font-face {
    font-family: "Padauk";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlOverride}normal.woff') format('woff'), url('${baseUrlOverride}normal.eot') format('eot'), url('${baseUrlOverride}normal.ttf') format('ttf');
    font-display: swap; 
  }`;

export const F_PADAUK_BOLD = (baseUrlOverride = baseUrlPadauk) => `
  @font-face {
    font-family: "Padauk";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlOverride}bold.woff') format('woff'), url('${baseUrlOverride}bold.eot') format('eot'), url('${baseUrlOverride}bold.ttf') format('ttf');
    font-display: swap;
  }
`;

// Shonar Bangla

export const F_SHONAR_BANGLA_REGULAR = (
  baseUrlOverride = baseUrlShonarBangla,
) => `
  @font-face {
    font-family: "Shonar Bangla";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlOverride}normal.woff') format('woff'), url('${baseUrlOverride}normal.eot') format('eot'), url('${baseUrlOverride}normal.ttf') format('ttf');
    font-display: optional;
  }`;

export const F_SHONAR_BANGLA_BOLD = (baseUrlOverride = baseUrlShonarBangla) => `
  @font-face {
    font-family: "Shonar Bangla";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlOverride}bold.woff') format('woff'), url('${baseUrlOverride}bold.eot') format('eot'), url('${baseUrlOverride}bold.ttf') format('ttf');
    font-display: optional;
  }
`;
