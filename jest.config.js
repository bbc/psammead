module.exports = {
  snapshotSerializers: ['@emotion/jest/serializer'],
  collectCoverageFrom: [
    '**/packages/**/*.{js,jsx}',
    'scripts/**',
    '**/.yeoman/support/**',
    '!**/*.stories.{js,jsx}',
    '!**/.eslintrc.js',
    '!**/dist/**',
    '!**/esm/**',
    '!**/moment-timezone-include/tz/**',
  ],
  transformIgnorePatterns: ['/node_modules/', '.yeoman/index.js'],
  testMatch: ['**/*.test.{js,jsx}', '!**/.yeoman/templates/**'],
  timers: 'modern',
};
