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
 * We require control over _when_ these styles are applied and
 * therefore cannot use @bbc/psammead-visually-hidden-text.
 */
export const visuallyHiddenStyle = `
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
`;
