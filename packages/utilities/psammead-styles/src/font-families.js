const reithFallback = `Helvetica, Arial, sans-serif;`;
const reithSans = `font-family: ReithSans, ${reithFallback}`;
const reithSerif = `font-family: ReithSerif, ${reithFallback}`;

const getFontStyleAndWeight = (style, weight) =>
  `font-weight: ${weight};
   font-style: ${style};`;

export const news = {
  sansRegular: `
   ${reithSans}
   ${getFontStyleAndWeight('normal', 400)} 
  `,
  sansItalic: `
   ${reithSans}
   ${getFontStyleAndWeight('italic', 400)} 
  `,
  sansBold: `
   ${reithSans}
   ${getFontStyleAndWeight('normal', 700)}
  `,
  sansBoldItalic: `
   ${reithSans}
   ${getFontStyleAndWeight('italic', 700)}
  `,
  serifRegular: `
   ${reithSerif}
   ${getFontStyleAndWeight('normal', 400)}
  `,
  serifMedium: `
   ${reithSerif}
   ${getFontStyleAndWeight('normal', 500)} 
  `,
  serifMediumItalic: `
   ${reithSerif}
   ${getFontStyleAndWeight('italic', 500)}
  `,
  serifBold: `
    ${reithSerif}
    ${getFontStyleAndWeight('normal', 700)}
  `,
};

const helmet = `font-family: Helmet, Freesans, Helvetica, Arial, sans serif;`;

const helmetFontStyles = {
  sansRegular: `
    ${helmet}
    ${getFontStyleAndWeight('normal', 400)}
  `,
  sansItalic: `
    ${helmet}
    ${getFontStyleAndWeight('italic', 400)}
  `,
  sansBold: `
    ${helmet}
    ${getFontStyleAndWeight('normal', 700)}
  `,
  sansBoldItalic: `
    ${helmet}
    ${getFontStyleAndWeight('italic', 700)}
  `,
};

const nassimPersian = `font-family: NassimPersian, Arial, Verdana, Geneva, Helvetica, sans serif;`;

const persianStyles = {
  sansRegular: `
    ${nassimPersian}
    ${getFontStyleAndWeight('normal', 400)}
  `,
  sansBold: `
    ${nassimPersian}
    ${getFontStyleAndWeight('normal', 700)}
  `,
};

export const persian = persianStyles;

export const igbo = helmetFontStyles;

export const pidgin = helmetFontStyles;

export const yoruba = helmetFontStyles;
