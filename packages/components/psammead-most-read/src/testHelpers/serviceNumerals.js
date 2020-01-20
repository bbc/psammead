import {
  Burmese,
  Bengali,
  EasternArabic,
  Nepali,
  WesternArabic,
} from '@bbc/psammead-locales/numerals';

const serviceNumerals = service => {
  const servicesNonWesternNumerals = {
    arabic: EasternArabic,
    bengali: Bengali,
    burmese: Burmese,
    nepali: Nepali,
    pashto: EasternArabic,
    persian: EasternArabic,
    urdu: EasternArabic,
  };
  return servicesNonWesternNumerals[service]
    ? servicesNonWesternNumerals[service]
    : WesternArabic;
};

export default serviceNumerals;
