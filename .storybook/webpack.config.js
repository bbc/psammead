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

  config.mode = 'production';

  return config;
};
