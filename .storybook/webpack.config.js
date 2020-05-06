const path = require('path');

module.exports = async ({ config }) => {
  config.resolve.modules =  [
    path.resolve(__dirname, '..', 'node_modules'),
    'node_modules'
  ];

  config.resolve.alias = {
    'styled-components': path.resolve(
      __dirname,
      '..',
      'node_modules',
      'styled-components',
    ),
  };

  return config;
};
