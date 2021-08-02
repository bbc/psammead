/* eslint-disable import/extensions */
import scanExposures from './scanExposures.js';

try {
  (async () => {
    await scanExposures();
  })();
} catch (error) {
  throw new Error(`An error occured while scanning for exposures: ${error}`);
}
