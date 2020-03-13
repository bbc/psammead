/**
 * Returns a string of text in title case.
 * @param {String} text A word or string of words.
 */
export const toTitleCase = (text = '') => {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(' ');
};

/**
 * Returns a string that has had its tokens replaced.
 * @param {String} text A word or string of words containing tokens.
 * @param {Object} dictionary An object which maps keys as tokens to values.
 */
export const detokenise = (text = '', dictionary = {}) => {
  return text.replace(/%\w+%/g, match => {
    return dictionary[match] || match;
  });
};
