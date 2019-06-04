import * as fonts from './font-families';

export const getSansRegular = service =>
  fonts[service] && fonts[service].sansRegular;

export const getSansItalic = service => {
  if (!fonts[service]) {
    return undefined;
  }
  const { sansItalic, sansRegular } = fonts[service];
  return sansItalic || sansRegular;
};

export const getSansBold = service => fonts[service] && fonts[service].sansBold;

export const getSansBoldItalic = service => {
  if (!fonts[service]) {
    return undefined;
  }
  const { sansBoldItalic, sansBold } = fonts[service];
  return sansBoldItalic || sansBold;
};

export const getSerifMedium = service => {
  if (!fonts[service]) {
    return undefined;
  }
  const { serifMedium, sansBold } = fonts[service];
  return serifMedium || sansBold;
};

export const getSerifMediumItalic = service => {
  if (!fonts[service]) {
    return undefined;
  }
  const { serifMediumItalic, sansBoldItalic, sansBold } = fonts[service];
  return serifMediumItalic || sansBoldItalic || sansBold;
};
