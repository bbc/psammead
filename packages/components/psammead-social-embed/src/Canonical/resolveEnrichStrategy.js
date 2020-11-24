/**
 * Return following the 'strategy pattern' return a social embed enrichment
 * algorithm based on the provider; for providers where enrichment is not necessary
 * an empty function is returned.
 * @param {string} provider Social embed provider
 */
const resolveEnrichStrategy = provider => {
  const enrichMap = {
    instagram: () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    },
    twitter: () => {
      if (window.twttr) {
        window.twttr.widgets.load();
      }
    },
  };

  return enrichMap[provider] ? enrichMap[provider] : () => {};
};

export default resolveEnrichStrategy;
