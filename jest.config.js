module.exports = {
  collectCoverageFrom: [
    '**/packages/**/*.{js,jsx}',
    'scripts/**',
    '!**/*.stories.{js,jsx}',
    '!**/.eslintrc.js',
    '!**/dist/**',
  ],
  testMatch: ['**/*.test.{js,jsx}'],
};
