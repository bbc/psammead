/**
 * Returns a string whose word or words have been transformed to Title Case.
 * @param {String} text A word or words.
 */
const toTitleCase = text =>
  text.length > 1
    ? text
        .toLowerCase()
        .split(' ')
        .map(word => {
          return word.replace(word[0], word[0].toUpperCase());
        })
        .join(' ')
    : text;

/**
 * Returns a string with a correctly transformed provider name.
 * @param {String} provider A given provider.
 */
export const toProviderName = provider => {
  if (typeof provider !== 'string')
    throw Error("Expected 'provider' to be a string.");
  return provider === 'youtube' ? 'YouTube' : toTitleCase(provider);
};

/**
 * Returns a string that has had its tokens replaced.
 * @param {String} text A word or words containing tokens.
 * @param {Object} dictionary An object which maps keys as tokens to values.
 */
export const detokenise = (text, dictionary) => {
  if (typeof text !== 'string') throw Error("Expected 'text' to be a string.");
  if (dictionary !== Object(dictionary))
    throw Error("Expected 'dictionary' to be an object.");
  return text.replace(/%\w+%/g, match => {
    return dictionary[match] || match;
  });
};
