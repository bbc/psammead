const reithFallback = `Helvetica, Arial, sans-serif;`;
const reithSans = `font-family: ReithSans, ${reithFallback}`;
const reithSerif = `font-family: ReithSerif, ${reithFallback}`;

export const news = {
  sansRegular: `
   ${reithSans} 
   font-style: normal;
   font-weight: 400;
  `,
  sansItalic: `
   ${reithSans}
   font-style: italic;
   font-weight: 400;
  `,
  sansBold: `
   ${reithSans}
   font-style: normal;
   font-weight: 700;
  `,
  sansBoldItalic: `
   ${reithSans}
   font-style: italic;
   font-weight: 700;
  `,
  serifRegular: `
   ${reithSerif},
   font-style: normal;
   font-weight: 400;
  `,
  serifMedium: `
   ${reithSerif} 
   font-style: normal;
   font-weight: 500;
  `,
  serifMediumItalic: `
   ${reithSerif} 
   font-style: italic;
   font-weight: 500;
  `,
};

const helmet = `font-family: Helmet, Freesans, Helvetica, Arial, sans serif;`;

const helmetFontStyles = {
  sansRegular: `
    ${helmet}
    font-weight: 400;
    font-style: normal;
  `,
  sansItalic: `
    ${helmet}
    font-weight: 400;
    font-style: italic;
  `,
  sansBold: `
    ${helmet}
    font-weight: 700;
    font-style: normal;
  `,
  sansBoldItalic: `
    ${helmet}
    font-weight: 700;
    font-style: italic;
  `,
};

const nessimPersian = `font-family: NassimPersian, Arial, Verdana, Geneva, Helvetica, sans serif`;

const persianStyles = {
  sansRegular: `
    ${nessimPersian}
    font-style: normal;
    font-weight: 400;
  `,
  sansBold: `
    ${nessimPersian} 
    font-style: normal;
    font-weight: 700;
  `,
};

export const persian = persianStyles;

export const igbo = helmetFontStyles;

export const pidgin = helmetFontStyles;

export const yoruba = helmetFontStyles;
