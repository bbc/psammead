const presets = ['@babel/preset-env', '@babel/preset-react'];

module.exports = {
  presets,
  env: {
    // used by Jest
    test: {
      presets,
    },
  },
};
