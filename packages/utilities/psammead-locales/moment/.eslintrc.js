module.exports = {
  env: {
    es6: false,
    browser: true,
    jest: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2009,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
