const path = require('path');

module.exports = async ({ config, mode }) => {
  config.resolve.alias = {
    'styled-components': path.resolve(
      __dirname,
      '..',
      'node_modules',
      'styled-components',
    ),
  };

  // Yes, this is a gross compromise. However, running storybook in production
  // mode makes the HMR very s l o w, so we don't want to do that all the time.
  // But if we don't we run into syntax issues on IE11. See #2753 for more info.
  if (process.env.FIX_STORYBOOK_IE11 === 'true') {
    config.mode = 'production';
  }

  return config;
};
