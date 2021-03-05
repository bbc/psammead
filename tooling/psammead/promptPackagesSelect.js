const { AutoComplete } = require('enquirer');

const promptPackageMultiSelect = require('./promptPackageMultiSelect');
const getPackages = require('./getPackages');

const packageNames = Object.keys(getPackages());
const SELECT_ERROR_MESSAGE =
  "⚠️ You didn't select any packages! Remember to hit space bar to select packages.";

const promptPackageSelect = async ({ pkgSelectMethod, isRetry }) => {
  const packages = pkgSelectMethod.includes('Select package(s)')
    ? await promptPackageMultiSelect({
        choices: packageNames,
        message: isRetry
          ? SELECT_ERROR_MESSAGE
          : 'Select package(s) with space bar then hit enter',
      })
    : await new AutoComplete({
        name: 'packages',
        message: isRetry
          ? SELECT_ERROR_MESSAGE
          : 'Enter packages(s). Remember to hit space bar to select.',
        limit: 10,
        // initial: 2,
        multiple: true,
        choices: packageNames,
      }).run();

  if (!packages || packages.length === 0) {
    return promptPackageSelect({ pkgSelectMethod, isRetry: true });
  }

  return packages;
};

module.exports = promptPackageSelect;
