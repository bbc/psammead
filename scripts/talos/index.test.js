const getChangedPackages = require('./getChangedPackages');
const upgradeDependencies = require('../upgradeDependencies');
const bumpPackages = require('../bumpPackages/index.js');
const getPackagePath = require('../utilities/getPackagePath');
const runPackagesInstall = require('../regeneratePackageLocks/runPackagesInstall');
const bumpChangelogs = require('../bumpChangelogs/index.js');
const checkoutBranch = require('./checkoutBranch');
const commitChanges = require('./commitChanges');
const createPullRequest = require('./createPullRequest');
const getBranchName = require('./getBranchName');
const talos = require('./index');

jest.mock('./getChangedPackages');
jest.mock('../upgradeDependencies');
jest.mock('../bumpPackages/index.js');
jest.mock('../utilities/getPackagePath');
jest.mock('../regeneratePackageLocks/runPackagesInstall');
jest.mock('../bumpChangelogs/index.js');
jest.mock('./checkoutBranch');
jest.mock('./commitChanges');
jest.mock('./createPullRequest');
jest.mock('./getBranchName');

jest.spyOn(process, 'exit').mockImplementation(() => {});
jest.spyOn(global.console, 'log').mockImplementation(() => {});
jest.spyOn(global.console, 'error').mockImplementation(() => {});

describe('Talos', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    getChangedPackages.mockImplementation(() => ['package1', 'package2']);
    getBranchName.mockImplementation(() => 'branchname');
    upgradeDependencies.mockImplementation(() =>
      Promise.resolve({
        apple: ['package1  ^1.2  →  ^1.4'],
        pears: ['package1  ^1.2  →  ^1.4', 'package2  ^1.0  →  ^1.1'],
      }),
    );
    createPullRequest.mockImplementation(() =>
      Promise.resolve({ data: { html_url: 'prURL' } }),
    );
    bumpPackages.mockImplementation(() => Promise.resolve());
  });

  it('should run expected commands to create PR', async () => {
    await talos();

    expect(getChangedPackages).toHaveBeenCalledTimes(1);

    expect(upgradeDependencies).toHaveBeenCalledTimes(1);
    expect(upgradeDependencies).toHaveBeenCalledWith(['package1', 'package2']);

    expect(bumpPackages).toHaveBeenCalledTimes(1);
    expect(bumpPackages).toHaveBeenCalledWith({
      packageNames: ['apple', 'pears'],
      version: 'patch',
    });

    expect(getPackagePath).toHaveBeenCalledTimes(2);
    expect(getPackagePath).toHaveBeenCalledWith('apple');
    expect(getPackagePath).toHaveBeenCalledWith('pears');

    expect(runPackagesInstall).toHaveBeenCalledTimes(2);

    expect(bumpChangelogs).toHaveBeenCalledTimes(2);
    expect(bumpChangelogs).toHaveBeenCalledWith({
      changesDescription: 'Talos - Bump Dependencies - package1',
      packageNames: ['apple'],
      prLink: 'prURL',
    });
    expect(bumpChangelogs).toHaveBeenCalledWith({
      changesDescription: 'Talos - Bump Dependencies - package1, package2',
      packageNames: ['pears'],
      prLink: 'prURL',
    });

    expect(checkoutBranch).toHaveBeenCalledTimes(1);
    expect(checkoutBranch).toHaveBeenCalledWith('branchname');

    expect(commitChanges).toHaveBeenCalledTimes(2);
    expect(commitChanges).toHaveBeenCalledWith('Talos - Update changelogs');
    expect(commitChanges).toHaveBeenCalledWith('Talos - Bump Dependencies');

    expect(createPullRequest).toHaveBeenCalledTimes(1);
    expect(createPullRequest).toHaveBeenCalledWith({
      branchName: 'branchname',
      bumpedPackagesObj: {
        apple: ['package1  ^1.2  →  ^1.4'],
        pears: ['package1  ^1.2  →  ^1.4', 'package2  ^1.0  →  ^1.1'],
      },
      packages: ['package1', 'package2'],
    });

    expect(getBranchName).toHaveBeenCalledTimes(1);
    expect(getBranchName).toHaveBeenCalled();

    expect(process.exit).not.toHaveBeenCalled();
    expect(global.console.log).not.toHaveBeenCalled();
  });

  it('should exit if no packages were published', async () => {
    getChangedPackages.mockImplementation(() => []);
    await talos();

    expect(process.exit).toHaveBeenCalled();
    expect(global.console.log).toHaveBeenCalledWith(
      'No packages were published!',
    );
  });

  it('should exit if promise chain rejects a promise', async () => {
    // Reject a random promise in the chain
    const error = new Error('something bad happened');
    checkoutBranch.mockImplementation(() => Promise.reject(error));

    await talos();

    expect(process.exit).toHaveBeenCalled();
    expect(global.console.error).toHaveBeenCalledWith(error);
  });
});
