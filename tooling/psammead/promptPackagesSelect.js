const { AutoComplete } = require('enquirer');

const promptPackageMultiSelect = require('./promptPackageMultiSelect');
const getPackages = require('./getPackages');

const packageNames = Object.keys(getPackages());

const promptPackageSelect = async ({ pkgSelectMethod }) => {
  const packages = pkgSelectMethod.includes('Select package(s)')
    ? await promptPackageMultiSelect(packageNames)
    : await new AutoComplete({
        name: 'packages',
        message: 'Enter packages(s). Remember to hit space bar to select.',
        limit: 10,
        // initial: 2,
        multiple: true,
        choices: packageNames,
      }).run();

  if (!packages || packages.length === 0) {
    // eslint-disable-next-line no-console
    console.log(
      "You didn't select any packages! Remember to hit space bar to select packages.",
    );

    return promptPackageSelect({ pkgSelectMethod });
  }

  return packages;
};

module.exports = promptPackageSelect;
