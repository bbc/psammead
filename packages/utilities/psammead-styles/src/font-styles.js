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

export const getSansBold = service => {
  if (!fonts[service]) {
    return undefined;
  }
  const { sansBold, sansRegular } = fonts[service];
  return sansBold || sansRegular;
};

export const getSansBoldItalic = service => {
  if (!fonts[service]) {
    return undefined;
  }
  const { sansBoldItalic } = fonts[service];
  return sansBoldItalic || getSansBold(service);
};

export const getSerifMedium = service => {
  if (!fonts[service]) {
    return undefined;
  }
  const { serifMedium } = fonts[service];
  return serifMedium || getSansBold(service);
};

export const getSerifMediumItalic = service => {
  if (!fonts[service]) {
    return undefined;
  }
  const { serifMediumItalic } = fonts[service];
  return serifMediumItalic || getSansBoldItalic(service);
};
