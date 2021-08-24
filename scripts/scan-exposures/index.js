const { scanExposures } = require('@bbc/exposure-scanning');

(async () => {
  await scanExposures();
})();
