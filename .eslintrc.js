module.exports = {
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['prettier', 'json', 'jsx-a11y', 'import'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'linebreak-style': process.platform === 'win32' ? 'off' : ['error', 'unix'],
    'import/no-extraneous-dependencies': 'off',
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: false,
      },
    ],
  },
};
