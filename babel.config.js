const presets = ['@babel/preset-env', '@babel/preset-react'];

module.exports = {
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        fileName: false,
      },
    ],
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
