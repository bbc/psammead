export const Bengali = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯', '১০'];
export const Burmese = ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉', '၁၀'];
export const EasternArabic = [
  '۰',
  '۱',
  '۲',
  '۳',
  '۴',
  '۵',
  '۶',
  '۷',
  '۸',
  '۹',
  '۱۰',
];
export const WesternArabic = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
];

const noOp = input => input;

export const makeNumeralTranslator = numeralSystem =>
  Array.isArray(numeralSystem) && numeralSystem.length === 10
    ? input => input.replace(/\d/g, match => numeralSystem[match])
    : noOp;
