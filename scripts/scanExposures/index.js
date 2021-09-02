/* eslint-disable no-console */
const { default: scanExposures } = require('@bbc/exposure-scanning');

(async () => {
  try {
    await scanExposures();
  } catch (error) {
    console.error(error);
    process.exitCode = 1; // This is important to ensure that the GitHub action fails.
  }
})();
