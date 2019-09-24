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

const baseURlMallanna =
  'https://ws-downloads.files.bbci.co.uk/fonts/Mallanna/v1.0.4/';

const baseUrlNotoSansEthiopic =
  'https://ws-downloads.files.bbci.co.uk/fonts/NotoSansEthiopic/v1.901/';

const baseUrlPadauk =
  'https://ws-downloads.files.bbci.co.uk/fonts/Padauk/v2.8/';

const baseUrlShonarBangla =
  'https://ws-downloads.files.bbci.co.uk/fonts/ShonarBangla/v5.91/';

// Reith Serif
export const F_REITH_SERIF_REGULAR = baseUrlOverride => `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseUrlOverride ||
      baseFontUrl}BBCReithSerif_W_Rg.woff2") format("woff2"), url("${baseUrlOverride ||
  baseFontUrl}BBCReithSerif_W_Rg.woff") format("woff");
    font-display: optional;
  }`;

export const F_REITH_SERIF_ITALIC = baseUrlOverride => `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseUrlOverride ||
      baseFontUrl}BBCReithSerif_W_It.woff2") format("woff2"), url("${baseUrlOverride ||
  baseFontUrl}BBCReithSerif_W_It.woff") format("woff");
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SERIF_BOLD = baseUrlOverride => `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseUrlOverride ||
      baseFontUrl}BBCReithSerif_W_Bd.woff2") format("woff2"), url("${baseUrlOverride ||
  baseFontUrl}BBCReithSerif_W_Bd.woff") format("woff");
    font-weight: 700;
    font-display: optional;
  }`;

export const F_REITH_SERIF_BOLD_ITALIC = baseUrlOverride => `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseUrlOverride ||
      baseFontUrl}BBCReithSerif_W_BdIt.woff2") format("woff2"), url("${baseUrlOverride ||
  baseFontUrl}BBCReithSerif_W_BdIt.woff") format("woff");
    font-weight: 700;
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SERIF_LIGHT = baseUrlOverride => `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseUrlOverride ||
      baseFontUrl}BBCReithSerif_W_Lt.woff2") format("woff2"), url("${baseUrlOverride ||
  baseFontUrl}BBCReithSerif_W_Lt.woff") format("woff");
    font-weight: 300;
    font-display: optional;
  }`;

export const F_REITH_SERIF_LIGHT_ITALIC = baseUrlOverride => `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseUrlOverride ||
      baseFontUrl}BBCReithSerif_W_LtIt.woff2") format("woff2"), url("${baseUrlOverride ||
  baseFontUrl}BBCReithSerif_W_LtIt.woff") format("woff");
    font-weight: 300;
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SERIF_MEDIUM = baseUrlOverride => `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseUrlOverride ||
      baseFontUrl}BBCReithSerif_W_Md.woff2") format("woff2"), url("${baseUrlOverride ||
  baseFontUrl}BBCReithSerif_W_Md.woff") format("woff");
    font-weight: 500;
    font-display: optional;
  }`;

export const F_REITH_SERIF_MEDIUM_ITALIC = baseUrlOverride => `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseUrlOverride ||
      baseFontUrl}BBCReithSerif_W_MdIt.woff2") format("woff2"), url("${baseUrlOverride ||
  baseFontUrl}BBCReithSerif_W_MdIt.woff") format("woff");
    font-weight: 500;
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SERIF_EXTRA_BOLD = baseUrlOverride => `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseUrlOverride ||
      baseFontUrl}BBCReithSerif_W_ExBd.woff2") format("woff2"), url("${baseUrlOverride ||
  baseFontUrl}BBCReithSerif_W_ExBd.woff") format("woff");
    font-weight: 800;
    font-display: optional;
  }`;

export const F_REITH_SERIF_EXTRA_BOLD_ITALIC = baseUrlOverride => `
  @font-face {
    font-family: "ReithSerif";
    src: url("${baseUrlOverride ||
      baseFontUrl}BBCReithSerif_W_ExBdIt.woff2") format("woff2"), url("${baseUrlOverride ||
  baseFontUrl}BBCReithSerif_W_ExBdIt.woff") format("woff");
    font-weight: 800;
    font-style: italic;
    font-display: optional;
  }`;

// Reith Sans

export const F_REITH_SANS_REGULAR = baseUrlOverride => `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseUrlOverride ||
      baseFontUrl}BBCReithSans_W_Rg.woff2") format("woff2"), url("${baseUrlOverride ||
  baseFontUrl}BBCReithSans_W_Rg.woff") format("woff");
    font-display: optional;
  }`;

export const F_REITH_SANS_ITALIC = baseUrlOverride => `
    @font-face {
    font-family: "ReithSans";
    src: url("${baseUrlOverride ||
      baseFontUrl}BBCReithSans_W_It.woff2") format("woff2"), url("${baseUrlOverride ||
  baseFontUrl}BBCReithSans_W_It.woff") format("woff");
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SANS_BOLD = baseUrlOverride => `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseUrlOverride ||
      baseFontUrl}BBCReithSans_W_Bd.woff2") format("woff2"), url("${baseUrlOverride ||
  baseFontUrl}BBCReithSans_W_Bd.woff") format("woff");
    font-weight: 700;
    font-display: optional;
  }`;

export const F_REITH_SANS_BOLD_ITALIC = baseUrlOverride => `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseUrlOverride ||
      baseFontUrl}BBCReithSans_W_BdIt.woff2") format("woff2"), url("${baseUrlOverride ||
  baseFontUrl}BBCReithSans_W_BdIt.woff") format("woff");
    font-weight: 700;
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SANS_LIGHT = baseUrlOverride => `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseUrlOverride ||
      baseFontUrl}BBCReithSans_W_Lt.woff2") format("woff2"), url("${baseUrlOverride ||
  baseFontUrl}BBCReithSans_W_Lt.woff") format("woff");
    font-weight: 300;
    font-display: optional;
  }`;

export const F_REITH_SANS_LIGHT_ITALIC = baseUrlOverride => `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseUrlOverride ||
      baseFontUrl}BBCReithSans_W_LtIt.woff2") format("woff2"), url("${baseUrlOverride ||
  baseFontUrl}BBCReithSans_W_LtIt.woff") format("woff");
    font-weight: 300;
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SANS_MEDIUM = baseUrlOverride => `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseUrlOverride ||
      baseFontUrl}BBCReithSans_W_Md.woff2") format("woff2"), url("${baseUrlOverride ||
  baseFontUrl}BBCReithSans_W_Md.woff") format("woff");
    font-weight: 500;
    font-display: optional;
  }`;

export const F_REITH_SANS_MEDIUM_ITALIC = baseUrlOverride => `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseUrlOverride ||
      baseFontUrl}BBCReithSans_W_MdIt.woff2") format("woff2"), url("${baseUrlOverride ||
  baseFontUrl}BBCReithSans_W_MdIt.woff") format("woff");
    font-weight: 500;
    font-style: italic;
    font-display: optional;
  }`;

export const F_REITH_SANS_EXTRA_BOLD = baseUrlOverride => `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseUrlOverride ||
      baseFontUrl}BBCReithSans_W_ExBd.woff2") format("woff2"), url("${baseUrlOverride ||
  baseFontUrl}BBCReithSans_W_ExBd.woff") format("woff");
    font-weight: 800;
    font-display: optional;
  }`;

export const F_REITH_SANS_EXTRA_BOLD_ITALIC = baseUrlOverride => `
  @font-face {
    font-family: "ReithSans";
    src: url("${baseUrlOverride ||
      baseFontUrl}BBCReithSans_W_ExBdIt.woff2") format("woff2"), url("${baseUrlOverride ||
  baseFontUrl}BBCReithSans_W_ExBdIt.woff") format("woff");
    font-weight: 800;
    font-style: italic;
    font-display: optional;
  }`;

// Reith Sans Condensed
export const F_REITH_SANS_CONDENSED_REGULAR = baseUrlOverride => `
    @font-face {
        font-family: "ReithSansCondensed";
        src: url("${baseUrlOverride ||
          baseFontUrl}BBCReithSansCd_W_Rg.woff2") format("woff2"), url("${baseUrlOverride ||
  baseFontUrl}BBCReithSansCd_W_Rg.woff") format("woff");
        font-display: optional;
    }`;

export const F_REITH_SANS_CONDENSED_BOLD = baseUrlOverride => `
    @font-face {
        font-family: "ReithSansCondensed";
        font-weight: 700;
        src: url("${baseUrlOverride ||
          baseFontUrl}BBCReithSansCd_W_Bd.woff2") format("woff2"), url("${baseUrlOverride ||
  baseFontUrl}BBCReithSansCd_W_Bd.woff") format("woff");
        font-display: optional;
    }`;

// BBC Nassim Arabic

export const F_NASSIM_ARABIC_REGULAR = baseUrlOverride => `
  @font-face {
    font-family: "BBC Nassim Arabic";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlBBCNassimArabic ||
      baseUrlOverride}normal.woff') format('woff'), url('${baseUrlBBCNassimArabic ||
  baseUrlOverride}normal.eot') format('eot'), url('${baseUrlBBCNassimArabic ||
  baseUrlOverride}normal.ttf') format('ttf');
    font-display: optional;
  }
`;

export const F_NASSIM_ARABIC_BOLD = baseUrlOverride => `
  @font-face {
    font-family: "BBC Nassim Arabic";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlBBCNassimArabic ||
      baseUrlOverride}bold.woff') format('woff'), url('${baseUrlBBCNassimArabic ||
  baseUrlOverride}bold.eot') format('eot'), url('${baseUrlBBCNassimArabic ||
  baseUrlOverride}bold.ttf') format('ttf');
    font-display: optional;
  }
`;

// BBC Nassim Pashto

export const F_NASSIM_PASHTO_REGULAR = baseUrlOverride => `
  @font-face {
    font-family: "BBC Nassim Pashto";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlBBCNassimPashto ||
      baseUrlOverride}normal.woff') format('woff'), url('${baseUrlBBCNassimPashto ||
  baseUrlOverride}normal.eot') format('eot'), url('${baseUrlBBCNassimPersian ||
  baseUrlOverride}normal.ttf') format('ttf');
    font-display: optional;
  }
`;

export const F_NASSIM_PASHTO_BOLD = baseUrlOverride => `
  @font-face {
    font-family: "BBC Nassim Pashto";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlBBCNassimPashto ||
      baseUrlOverride}bold.woff') format('woff'), url('${baseUrlBBCNassimPashto ||
  baseUrlOverride}bold.eot') format('eot'), url('${baseUrlBBCNassimPersian ||
  baseUrlOverride}bold.ttf') format('ttf');
    font-display: optional;
  }
`;

// BBC Nassim Persian

export const F_NASSIM_PERSIAN_REGULAR = baseUrlOverride => `
  @font-face {
    font-family: "BBC Nassim Persian";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlBBCNassimPersian ||
      baseUrlOverride}normal.woff') format('woff'), url('${baseUrlBBCNassimPersian ||
  baseUrlOverride}normal.eot') format('eot'), url('${baseUrlBBCNassimPersian ||
  baseUrlOverride}normal.ttf') format('ttf');
    font-display: optional;
  }
`;

export const F_NASSIM_PERSIAN_BOLD = baseUrlOverride => `
  @font-face {
    font-family: "BBC Nassim Persian";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlBBCNassimPersian ||
      baseUrlOverride}bold.woff') format('woff'), url('${baseUrlBBCNassimPersian ||
  baseUrlOverride}bold.eot') format('eot'), url('${baseUrlBBCNassimPersian ||
  baseUrlOverride}bold.ttf') format('ttf');
    font-display: optional;
  }
`;

// BBC Nassim Urdu

export const F_NASSIM_URDU_REGULAR = baseUrlOverride => `
  @font-face {
    font-family: "BBC Nassim Urdu";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlBBCNassimUrdu ||
      baseUrlOverride}normal.woff') format('woff'), url('${baseUrlBBCNassimUrdu ||
  baseUrlOverride}normal.eot') format('eot'), url('${baseUrlBBCNassimUrdu ||
  baseUrlOverride}normal.ttf') format('ttf');
    font-display: optional;
  }
`;

export const F_NASSIM_URDU_BOLD = baseUrlOverride => `
  @font-face {
    font-family: "BBC Nassim Urdu";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlBBCNassimUrdu ||
      baseUrlOverride}bold.woff') format('woff'), url('${baseUrlBBCNassimUrdu ||
  baseUrlOverride}bold.eot') format('eot'), url('${baseUrlBBCNassimPersian ||
  baseUrlOverride}bold.ttf') format('ttf');
    font-display: optional;
  }
`;

// Iskoola Pota BBC

export const F_ISKOOLA_POTA_BBC_REGULAR = baseUrlOverride => `
  @font-face {
    font-family: "Iskoola Pota BBC";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlIskoolaPotaBBC ||
      baseUrlOverride}normal.woff') format('woff'), url('${baseUrlIskoolaPotaBBC ||
  baseUrlOverride}normal.eot') format('eot'), url('${baseUrlIskoolaPotaBBC ||
  baseUrlOverride}normal.ttf') format('ttf');
    font-display: swap;
  }`;

export const F_ISKOOLA_POTA_BBC_BOLD = baseUrlOverride => `
  @font-face {
    font-family: "Iskoola Pota BBC";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlIskoolaPotaBBC ||
      baseUrlOverride}bold.woff') format('woff'), url('${baseUrlIskoolaPotaBBC ||
  baseUrlOverride}bold.eot') format('eot'), url('${baseUrlIskoolaPotaBBC ||
  baseUrlOverride}bold.ttf') format('ttf');
    font-display: swap;
  }
`;

// Latha

export const F_LATHA_REGULAR = baseUrlOverride => `
  @font-face {
    font-family: "Latha";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlLatha ||
      baseUrlOverride}normal.woff') format('woff'), url('${baseUrlLatha ||
  baseUrlOverride}normal.eot') format('eot'), url('${baseUrlLatha ||
  baseUrlOverride}normal.ttf') format('ttf');
    font-display: swap;
  }`;

export const F_LATHA_BOLD = baseUrlOverride => `
  @font-face {
    font-family: "Latha";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlLatha ||
      baseUrlOverride}bold.woff') format('woff'), url('${baseUrlLatha ||
  baseUrlOverride}bold.eot') format('eot'), url('${baseUrlLatha ||
  baseUrlOverride}bold.ttf') format('ttf');
    font-display: swap;
  }
`;

// Mallanna

export const F_MALLANNA_REGULAR = baseUrlOverride => `
  @font-face {
    font-family: "Mallanna";
    font-weight: 400;
    font-style: normal;
    src: url('${baseURlMallanna ||
      baseUrlOverride}normal.woff') format('woff'), url('${baseURlMallanna ||
  baseUrlOverride}normal.eot') format('eot'), url('${baseURlMallanna ||
  baseUrlOverride}normal.ttf') format('ttf');
    font-display: swap;
  }
`;

// Noto Sans Ethiopic

export const F_NOTO_SANS_ETHIOPIC_REGULAR = baseUrlOverride => `
  @font-face {
    font-family: "Noto Sans Ethiopic";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlNotoSansEthiopic ||
      baseUrlOverride}normal.woff') format('woff'), url('${baseUrlNotoSansEthiopic ||
  baseUrlOverride}normal.eot') format('eot'), url('${baseUrlNotoSansEthiopic ||
  baseUrlOverride}normal.ttf') format('ttf');
    font-display: swap;
  }
  `;

export const F_NOTO_SANS_ETHIOPIC_BOLD = baseUrlOverride => `
  @font-face {
    font-family: "Noto Sans Ethiopic";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlNotoSansEthiopic ||
      baseUrlOverride}bold.woff') format('woff'), url('${baseUrlNotoSansEthiopic ||
  baseUrlOverride}bold.eot') format('eot'), url('${baseUrlNotoSansEthiopic ||
  baseUrlOverride}bold.ttf') format('ttf');
    font-display: swap;
  }
`;

// Padauk

export const F_PADAUK_REGULAR = baseUrlOverride => `
  @font-face {
    font-family: "Padauk";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlPadauk ||
      baseUrlOverride}normal.woff') format('woff'), url('${baseUrlPadauk ||
  baseUrlOverride}normal.eot') format('eot'), url('${baseUrlPadauk ||
  baseUrlOverride}normal.ttf') format('ttf');
    font-display: swap; 
  }`;

export const F_PADAUK_BOLD = baseUrlOverride => `
  @font-face {
    font-family: "Padauk";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlPadauk ||
      baseUrlOverride}bold.woff') format('woff'), url('${baseUrlPadauk ||
  baseUrlOverride}bold.eot') format('eot'), url('${baseUrlPadauk ||
  baseUrlOverride}bold.ttf') format('ttf');
    font-display: swap;
  }
`;

// Shonar Bangla

export const F_SHONAR_BANGLA_REGULAR = baseUrlOverride => `
  @font-face {
    font-family: "Shonar Bangla";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlShonarBangla ||
      baseUrlOverride}normal.woff') format('woff'), url('${baseUrlShonarBangla ||
  baseUrlOverride}normal.eot') format('eot'), url('${baseUrlShonarBangla ||
  baseUrlOverride}normal.ttf') format('ttf');
    font-display: optional;
  }`;

export const F_SHONAR_BANGLA_BOLD = baseUrlOverride => `
  @font-face {
    font-family: "Shonar Bangla";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlShonarBangla ||
      baseUrlOverride}bold.woff') format('woff'), url('${baseUrlShonarBangla ||
  baseUrlOverride}bold.eot') format('eot'), url('${baseUrlShonarBangla ||
  baseUrlOverride}bold.ttf') format('ttf');
    font-display: optional;
  }
`;
