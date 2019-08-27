/* eslint-disable func-names */
const symbolMap = {
  '1': '۱',
  '2': '۲',
  '3': '۳',
  '4': '٤',
  '5': '۵',
  '6': '۶',
  '7': '۷',
  '8': '۸',
  '9': '۹',
  '0': '۰',
};

function useEasternNumerals(inputString) {
  return inputString
    .replace(/\d/g, function(match) {
      return symbolMap[match];
    })
    .replace(/,/g, '،');
}

exports.useEasternNumerals = useEasternNumerals;
