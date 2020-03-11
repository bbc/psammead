/**
 * Returns true if 'provider' matches a key in 'providers'.
 * @param {String} provider The name of a social media provider.
 * @param {Object} providers A Object contaning a list of supported social media providers.
 */
const isSupportedProvider = (provider, providers) => {
  if (typeof providers !== 'object' || providers === null)
    throw Error("Expected 'providers' to be an Object.");
  return Object.keys(providers).includes(provider);
};

export default isSupportedProvider;
