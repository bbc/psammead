/*
 *  BBC REITH
 */

const reithFallback = `Helvetica, Arial, sans-serif;`;
const reithSans = `font-family: ReithSans, ${reithFallback}`;
const reithSerif = `font-family: ReithSerif, ${reithFallback}`;

const getFontStyleAndWeight = (style, weight) =>
  `font-weight: ${weight};
   font-style: ${style};`;

const newsReithFontStyles = {
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

/*
 *  BBC NASSIM
 */

const nassimArabicFontFamily = `font-family: BBCNassimArabic, Arial, Verdana, Geneva, Helvetica, sans-serif;`;
const nassimPashtoFontFamily = `font-family: BBCNassimPashto, Arial, Verdana, Geneva, Helvetica, sans-serif;`;
const nassimPersianFontFamily = `font-family: BBCNassimPersian, Arial, Verdana, Geneva, Helvetica, sans-serif;`;
const nassimUrduFontFamily = `font-family: BBCNassimUrdu, Arial, Verdana, Geneva, Helvetica, sans-serif;`;

const nassimFontStyles = fontFamily => ({
  sansRegular: `
    ${fontFamily}
    ${getFontStyleAndWeight('normal', 400)}
  `,
  sansBold: `
    ${fontFamily}
    ${getFontStyleAndWeight('normal', 700)}
  `,
});

export const afaanoromoo = newsReithFontStyles;
export const afrique = newsReithFontStyles;
export const amharic = newsReithFontStyles;
export const arabic = nassimFontStyles(nassimArabicFontFamily);
export const azeri = newsReithFontStyles;
export const bengali = newsReithFontStyles;
export const burmese = newsReithFontStyles;
export const cymrufyw = newsReithFontStyles;
export const gahuza = newsReithFontStyles;
export const gujarati = newsReithFontStyles;
export const hausa = newsReithFontStyles;
export const hindi = newsReithFontStyles;
export const igbo = helmetFontStyles;
export const index = newsReithFontStyles;
export const indonesia = newsReithFontStyles;
export const japanese = newsReithFontStyles;
export const korean = newsReithFontStyles;
export const kyrgyz = newsReithFontStyles;
export const loadableConfig = newsReithFontStyles;
export const marathi = newsReithFontStyles;
export const mundo = newsReithFontStyles;
export const naidheachdan = newsReithFontStyles;
export const nepali = newsReithFontStyles;
export const news = newsReithFontStyles;
export const pashto = nassimFontStyles(nassimPashtoFontFamily);
export const persian = nassimFontStyles(nassimPersianFontFamily);
export const pidgin = helmetFontStyles;
export const portuguese = newsReithFontStyles;
export const punjabi = newsReithFontStyles;
export const russian = newsReithFontStyles;
export const serbian = newsReithFontStyles;
export const sinhala = newsReithFontStyles;
export const somali = newsReithFontStyles;
export const swahili = newsReithFontStyles;
export const tamil = newsReithFontStyles;
export const telugu = newsReithFontStyles;
export const thai = newsReithFontStyles;
export const tigrinya = newsReithFontStyles;
export const turkce = newsReithFontStyles;
export const ukchina = newsReithFontStyles;
export const ukrainian = newsReithFontStyles;
export const urdu = nassimFontStyles(nassimUrduFontFamily);
export const uzbek = newsReithFontStyles;
export const vietnamese = newsReithFontStyles;
export const yoruba = helmetFontStyles;
export const zhongwen = newsReithFontStyles;
