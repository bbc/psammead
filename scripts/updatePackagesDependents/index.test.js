const { exec } = require('shelljs');
const updatePackagesDependents = require('.');

jest.mock('shelljs', () => ({
  exec: jest.fn(),
}));

describe('getPackageNames', () => {
  it('should run command to update all packages that are dependent on passed in packages', () => {
    updatePackagesDependents(['@bbc/psammead-brand', '@bbc/psammead-image']);
    const [command] = exec.mock.calls[1];

    expect(command).toEqual(
      'npx lerna exec --parallel --no-bail -- npx npm-check-updates @bbc/psammead-brand, @bbc/psammead-image -u -a',
    );
  });
});
