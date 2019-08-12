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

const baseUrlLatha = 'https://ws-downloads.files.bbci.co.uk/fonts/Latha/v5.90';

const baseURlMallanna =
  'https://ws-downloads.files.bbci.co.uk/fonts/Mallanna/v1.0.4/';

const baseUrlNotoSansEthiopic =
  'https://ws-downloads.files.bbci.co.uk/fonts/NotoSansEthiopic/v1.901/';

const baseUrlPadauk =
  'https://ws-downloads.files.bbci.co.uk/fonts/Padauk/v2.8/';

const baseUrlShonarBangla =
  'https://ws-downloads.files.bbci.co.uk/fonts/ShonarBangla/v5.91/';

// Reith Serif
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

// Reith Sans

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

// Reith Sans Condensed
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

// BBC Nassim Arabic

export const F_NASSIM_ARABIC_REGULAR = `
  @font-face {
    font-family: "BBC Nassim Arabic";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlBBCNassimArabic}normal.woff') format('woff'), url('${baseUrlBBCNassimArabic}normal.eot') format('eot'), url('${baseUrlBBCNassimArabic}normal.ttf') format('ttf');
    font-display: optional;
  }
`;

export const F_NASSIM_ARABIC_BOLD = `
  @font-face {
    font-family: "BBC Nassim Arabic";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlBBCNassimArabic}bold.woff') format('woff'), url('${baseUrlBBCNassimArabic}bold.eot') format('eot'), url('${baseUrlBBCNassimArabic}bold.ttf') format('ttf');
    font-display: optional;
  }
`;

// BBC Nassim Pashto

export const F_NASSIM_PASHTO_REGULAR = `
  @font-face {
    font-family: "BBC Nassim Pashto";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlBBCNassimPashto}normal.woff') format('woff'), url('${baseUrlBBCNassimPashto}normal.eot') format('eot'), url('${baseUrlBBCNassimPersian}normal.ttf') format('ttf');
    font-display: optional;
  }
`;

export const F_NASSIM_PASHTO_BOLD = `
  @font-face {
    font-family: "BBC Nassim Pashto";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlBBCNassimPashto}bold.woff') format('woff'), url('${baseUrlBBCNassimPashto}bold.eot') format('eot'), url('${baseUrlBBCNassimPersian}bold.ttf') format('ttf');
    font-display: optional;
  }
`;

// BBC Nassim Persian

export const F_NASSIM_PERSIAN_REGULAR = `
  @font-face {
    font-family: "BBC Nassim Persian";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlBBCNassimPersian}normal.woff') format('woff'), url('${baseUrlBBCNassimPersian}normal.eot') format('eot'), url('${baseUrlBBCNassimPersian}normal.ttf') format('ttf');
    font-display: optional;
  }
`;

export const F_NASSIM_PERSIAN_BOLD = `
  @font-face {
    font-family: "BBC Nassim Persian";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlBBCNassimPersian}bold.woff') format('woff'), url('${baseUrlBBCNassimPersian}bold.eot') format('eot'), url('${baseUrlBBCNassimPersian}bold.ttf') format('ttf');
    font-display: optional;
  }
`;

// BBC Nassim Urdu

export const F_NASSIM_URDU_REGULAR = `
  @font-face {
    font-family: "BBC Nassim Urdu";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlBBCNassimUrdu}normal.woff') format('woff'), url('${baseUrlBBCNassimUrdu}normal.eot') format('eot'), url('${baseUrlBBCNassimUrdu}normal.ttf') format('ttf');
    font-display: optional;
  }
`;

export const F_NASSIM_URDU_BOLD = `
  @font-face {
    font-family: "BBC Nassim Urdu";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlBBCNassimUrdu}bold.woff') format('woff'), url('${baseUrlBBCNassimUrdu}bold.eot') format('eot'), url('${baseUrlBBCNassimPersian}bold.ttf') format('ttf');
    font-display: optional;
  }
`;

// Iskoola Pota BBC

export const F_ISKOOLA_POTA_BBC_REGULAR = `
  @font-face {
    font-family: "Iskoola Pota BBC";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlIskoolaPotaBBC}normal.woff') format('woff'), url('${baseUrlIskoolaPotaBBC}normal.eot') format('eot'), url('${baseUrlIskoolaPotaBBC}normal.ttf') format('ttf');
    font-display: swap;
  }`;

export const F_ISKOOLA_POTA_BBC_BOLD = `
  @font-face {
    font-family: "Iskoola Pota BBC";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlIskoolaPotaBBC}bold.woff') format('woff'), url('${baseUrlIskoolaPotaBBC}bold.eot') format('eot'), url('${baseUrlIskoolaPotaBBC}bold.ttf') format('ttf');
    font-display: swap;
  }
`;

// Latha

export const F_LATHA_REGULAR = `
  @font-face {
    font-family: "Latha";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlLatha}normal.woff') format('woff'), url('${baseUrlLatha}normal.eot') format('eot'), url('${baseUrlLatha}normal.ttf') format('ttf');
    font-display: swap;
  }`;

export const F_LATHA_BOLD = `
  @font-face {
    font-family: "Latha";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlLatha}bold.woff') format('woff'), url('${baseUrlLatha}bold.eot') format('eot'), url('${baseUrlLatha}bold.ttf') format('ttf');
    font-display: swap;
  }
`;

// Mallanna

export const F_MALLANNA_REGULAR = `
  @font-face {
    font-family: "Mallanna";
    font-weight: 400;
    font-style: normal;
    src: url('${baseURlMallanna}normal.woff') format('woff'), url('${baseURlMallanna}normal.eot') format('eot'), url('${baseURlMallanna}normal.ttf') format('ttf');
    font-display: swap;
  }
`;

// Noto Sans Ethiopic

export const F_NOTO_SANS_ETHIOPIC_REGULAR = `
  @font-face {
    font-family: "Noto Sans Ethiopic";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlNotoSansEthiopic}normal.woff') format('woff'), url('${baseUrlNotoSansEthiopic}normal.eot') format('eot'), url('${baseUrlNotoSansEthiopic}normal.ttf') format('ttf');
    font-display: swap;
  }
  `;

export const F_NOTO_SANS_ETHIOPIC_BOLD = `
  @font-face {
    font-family: "Noto Sans Ethiopic";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlNotoSansEthiopic}bold.woff') format('woff'), url('${baseUrlNotoSansEthiopic}bold.eot') format('eot'), url('${baseUrlNotoSansEthiopic}bold.ttf') format('ttf');
    font-display: swap;
  }
`;

// Padauk

export const F_PADAUK_REGULAR = `
  @font-face {
    font-family: "Padauk";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlPadauk}normal.woff') format('woff'), url('${baseUrlPadauk}normal.eot') format('eot'), url('${baseUrlPadauk}normal.ttf') format('ttf');
    font-display: swap;
  }`;

export const F_PADAUK_BOLD = `
  @font-face {
    font-family: "Padauk";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlPadauk}bold.woff') format('woff'), url('${baseUrlPadauk}bold.eot') format('eot'), url('${baseUrlPadauk}bold.ttf') format('ttf');
    font-display: swap;
  }
`;

// Shonar Bangla

export const F_SHONAR_BANGLA_REGULAR = `
  @font-face {
    font-family: "Shonar Bangla";
    font-weight: 400;
    font-style: normal;
    src: url('${baseUrlShonarBangla}normal.woff') format('woff'), url('${baseUrlShonarBangla}normal.eot') format('eot'), url('${baseUrlShonarBangla}normal.ttf') format('ttf');
    font-display: optional;
  }`;

export const F_SHONAR_BANGLA_BOLD = `
  @font-face {
    font-family: "Shonar Bangla";
    font-weight: 700;
    font-style: normal;
    src: url('${baseUrlShonarBangla}bold.woff') format('woff'), url('${baseUrlShonarBangla}bold.eot') format('eot'), url('${baseUrlShonarBangla}bold.ttf') format('ttf');
    font-display: optional;
  }
`;
