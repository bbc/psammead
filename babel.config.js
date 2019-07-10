const presets = ['@babel/preset-react'];

if (process.env.BABEL_TYPE !== 'esm') {
  presets.push('@babel/preset-env');
}

module.exports = {
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        fileName: false,
      },
    ],
    '@babel/plugin-proposal-export-default-from',
  ],
  presets,
  env: {
    // used by Jest
    test: {
      presets,
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  },
};
