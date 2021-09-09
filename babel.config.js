const presets = [
  '@babel/preset-react',
  [
    '@babel/preset-env',
    {
      targets: {
        browsers: [
          'chrome >= 53',
          'firefox >= 45.0',
          'ie >= 11',
          'edge >= 37',
          'safari >= 9',
          'opera >= 40',
          'op_mini >= 18',
          'Android >= 7',
          'and_chr >= 53',
          'and_ff >= 49',
          'ios_saf >= 10',
        ],
      },
      modules: process.env.BABEL_TYPE === 'esm' ? false : 'auto',
    },
  ],
];

module.exports = {
  plugins: [
    '@emotion',
    '@babel/plugin-proposal-export-default-from',
    '@loadable/babel-plugin',
  ],
  presets,
  env: {
    // used by Jest
    test: {
      presets,
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        '@babel/plugin-transform-runtime',
        'dynamic-import-node',
      ],
    },
  },
};
