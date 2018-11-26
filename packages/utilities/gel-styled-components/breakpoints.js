/* 
   Screen sizes for GEL Typography
   These namings are based on the GEL description. They are also known as group B and group D
   Link to relevant GEL docs: http://www.bbc.co.uk/gel/guidelines/typography#type-sizes
*/
export const GROUP_B_MIN_WIDTH = 20; // 320px
export const GROUP_B_MAX_WIDTH = 37.4375; // 599px
export const GROUP_CD_MIN_WIDTH = 37.5; // 600px

/*
    The following are breakpoints from GEL Grid
    Link to relevant GEL docs: https://www.bbc.co.uk/gel/guidelines/grid#grid-sizes
    The only exception is that we have split out group 1 into 0 and 1
*/
export const GROUP_0_SCREEN_WIDTH_MIN = `0em`; // 0px
export const GROUP_0_SCREEN_WIDTH_MAX = `14.9375em`; // 239px

export const GROUP_1_SCREEN_WIDTH_MIN = `15em`; // 240px
export const GROUP_1_SCREEN_WIDTH_MAX = `24.9375em`; // 399px

export const GROUP_2_SCREEN_WIDTH_MIN = `25em`; // 400px
export const GROUP_2_SCREEN_WIDTH_MAX = `37.4375em`; // 599px

export const GROUP_3_SCREEN_WIDTH_MIN = `37.5em`; // 600px
export const GROUP_3_SCREEN_WIDTH_MAX = `62.9375em`; // 1007px

export const GROUP_4_SCREEN_WIDTH_MIN = `63em`; // 1008px
export const GROUP_4_SCREEN_WIDTH_MAX = `80em`; // 1279px

export const GROUP_5_SCREEN_WIDTH_MIN = `80em`; // 1280px

export const MEDIA_QUERY_TYPOGRAPHY = {
  smartPhoneOnly: `@media (min-width: ${GROUP_B_MIN_WIDTH}em) and (max-width: ${GROUP_B_MAX_WIDTH}em)`,
  smartPhoneAndLarger: `@media (min-width: ${GROUP_B_MIN_WIDTH}em)`,
  laptopAndLarger: `@media (min-width: ${GROUP_CD_MIN_WIDTH}em)`,
};
