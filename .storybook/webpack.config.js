const path = require('path');

module.exports = async ({ config }) => {
  config.resolve.modules =  [
    path.resolve(__dirname, '..', 'node_modules'),
    'node_modules'
  ];

  return config;
};
