const fontFamilies = {
  news: {
    serif: `ReithSerif, Helvetica, Arial, sans-serif`,
    sans: `ReithSans, Helvetica, Arial, sans-serif`,
    sansCond: `ReithSansCondensed, Helvetica, Arial, sans-serif`,
  },
  persian: {
    serif: `NassimPersian, Arial, Verdana, Geneva, Helvetica, sans serif`,
    sans: `NassimPersian, Arial, Verdana, Geneva, Helvetica, sans serif`,
    sansCond: `NassimPersian, Arial, Verdana, Geneva, Helvetica, sans serif`,
  },
  igbo: {
    serif: `Helmet, Freesans, Helvetica, Arial, sans-serif`,
    sans: `Helmet, Freesans, Helvetica, Arial, sans-serif`,
    sansCond: `Helmet, Freesans, Helvetica, Arial, sans-serif`,
  },
  pidgin: {
    serif: `Helmet, Freesans, Helvetica, Arial, sans-serif`,
    sans: `Helmet, Freesans, Helvetica, Arial, sans-serif`,
    sansCond: `Helmet, Freesans, Helvetica, Arial, sans-serif`,
  },
  yoruba: {
    serif: `Helmet, Freesans, Helvetica, Arial, sans-serif`,
    sans: `Helmet, Freesans, Helvetica, Arial, sans-serif`,
    sansCond: `Helmet, Freesans, Helvetica, Arial, sans-serif`,
  },
};

export const getSerif = service =>
  fontFamilies[service] ? fontFamilies[service].serif : null;

export const getSans = service =>
  fontFamilies[service] ? fontFamilies[service].sans : null;

export const getSansCond = service =>
  fontFamilies[service] ? fontFamilies[service].sansCond : null;
