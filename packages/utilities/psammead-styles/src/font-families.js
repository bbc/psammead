/*
 *  BBC REITH
 */

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

/*
 *  HELMET
 */

const helmet = `font-family: Helmet, Freesans, Helvetica, Arial, sans-serif;`;

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

export const igbo = helmetFontStyles;

export const pidgin = helmetFontStyles;

export const yoruba = helmetFontStyles;

/*
 *  BBC NASSIM
 */

const nassimArabicFontFamily = `font-family: BBCNassimArabic, Arial, Verdana, Geneva, Helvetica, sans-serif;`;
const nassimPashtoFontFamily = `font-family: BBCNassimPashto, Arial, Verdana, Geneva, Helvetica, sans-serif;`;
const nassimPersianFontFamily = `font-family: BBBCNassimPersian, Arial, Verdana, Geneva, Helvetica, sans-serif;`;
const nassimUrduFontFamily = `font-family: BBCNassimUrdu, Arial, Verdana, Geneva, Helvetica, sans-serif;`;

const nassimStyles = fontFamily => ({
  sansRegular: `
    ${fontFamily}
    ${getFontStyleAndWeight('normal', 400)}
  `,
  sansBold: `
    ${fontFamily}
    ${getFontStyleAndWeight('normal', 700)}
  `,
});

export const arabic = nassimStyles(nassimArabicFontFamily);

export const pashto = nassimStyles(nassimPashtoFontFamily);

export const persian = nassimStyles(nassimPersianFontFamily);

export const urdu = nassimStyles(nassimUrduFontFamily);
