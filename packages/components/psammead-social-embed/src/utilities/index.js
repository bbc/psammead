/**
 * Returns a string of a known provider name.
 * @param {String} provider A given provider.
 */
export const getProviderName = provider => {
  if (typeof provider !== 'string')
    throw Error("Expected 'provider' to be a string.");
  return {
    instagram: 'Instagram',
    twitter: 'Twitter',
    youtube: 'YouTube',
    facebook: 'Facebook',
  }[provider];
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

/**
 * Returns an object that can be used to map tokens to values.
 * @param {Object} definitions An object containing definitions.
 */
export const dictionaryFactory = ({ provider }) => ({
  '%provider_name%': getProviderName(provider) || provider,
  '%provider%': provider,
});

/**
 * These styles are lifted from @bbc/psammead-visually-hidden-text, which we
 * cannot use directly as we require control over _when_ they are applied.
 */
export const visuallyHiddenStyle = `
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  width: 1px;
  margin: 0;
`;
