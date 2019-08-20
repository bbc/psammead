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

  if (process.env.FIX_STORYBOOK_IE11 === 'true') {
    config.mode = 'production';
  }

  return config;
};
