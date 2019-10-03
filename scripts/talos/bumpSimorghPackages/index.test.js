const getRemoteFile = require('../../utilities/getRemoteFile');
const createRemoteBranch = require('../../utilities/createRemoteBranch');
const createPullRequest = require('../../utilities/createPullRequest');
const getPackageNames = require('../createPullRequest/getPackageNames');
const getPublishedPackages = require('./getPublishedPackages');
const getChangelogHead = require('../getChangelogHead');
const getUpdates = require('./getUpdates');
const updatePackageLock = require('./updatePackageLock');
const updatePackageJson = require('./updatePackageJson');
const {
  EXPECTED_CHANGELOG_HEAD1,
} = require('../getChangelogHead/mockChangelogs');
const {
  BUMPED_PACKAGES,
  PUBLISHED_PACKAGES,
} = require('./getPublishedPackages/mockPublishedPackages');
const bumpSimorghPackages = require('.');
const PACKAGE_JSON = require('./mockPackageJson');

const path = 'package.json';
const repoName = 'simorgh';
const generatedBranchName = 'branchname';

const mockPrBody = `@bbc/gel-foundations  ^3.4.0  →  ^3.5.2
| Version | Description |
|---------|-------------|
| 1.3.0 | [PR#1025](https://github.com/bbc/psammead/pull/3) mock changes 4 |
| 1.2.0 | [PR#1025](https://github.com/bbc/psammead/pull/3) mock changes 3 |

@bbc/psammead-assets  ^2.4.0  →  ^2.5.1
| Version | Description |
|---------|-------------|
| 1.3.0 | [PR#1025](https://github.com/bbc/psammead/pull/3) mock changes 4 |
| 1.2.0 | [PR#1025](https://github.com/bbc/psammead/pull/3) mock changes 3 |

@bbc/psammead-caption  ^2.2.9  →  ^2.3.2
| Version | Description |
|---------|-------------|
| 1.3.0 | [PR#1025](https://github.com/bbc/psammead/pull/3) mock changes 4 |
| 1.2.0 | [PR#1025](https://github.com/bbc/psammead/pull/3) mock changes 3 |

@bbc/psammead-storybook-helpers  ^6.0.1  →  ^6.2.1
| Version | Description |
|---------|-------------|
| 1.3.0 | [PR#1025](https://github.com/bbc/psammead/pull/3) mock changes 4 |
| 1.2.0 | [PR#1025](https://github.com/bbc/psammead/pull/3) mock changes 3 |`;

jest.mock('../../utilities/getRemoteFile');
jest.mock('../../utilities/createRemoteBranch');
jest.mock('../../utilities/createPullRequest');
jest.mock('../createPullRequest/getPackageNames');
jest.mock('../getChangelogHead');
jest.mock('./getPublishedPackages');
jest.mock('./getUpdates');
jest.mock('./updatePackageLock');
jest.mock('./updatePackageJson');

describe('bumpSimorghPackages', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    getRemoteFile.mockImplementation(async () => ({
      data: { contents: JSON.stringify(PACKAGE_JSON) },
    }));
    createRemoteBranch.mockImplementation(async () => {});
    createPullRequest.mockImplementation(async () => {});
    getPackageNames.mockImplementation(() => 'packages');
    getChangelogHead.mockImplementation(() => EXPECTED_CHANGELOG_HEAD1);
    getPublishedPackages.mockImplementation(() => PUBLISHED_PACKAGES);
    getUpdates.mockImplementation(() => [
      '@bbc/gel-foundations  ^3.4.0  →  ^3.5.2',
      '@bbc/psammead-assets  ^2.4.0  →  ^2.5.1',
      '@bbc/psammead-caption  ^2.2.9  →  ^2.3.2',
      '@bbc/psammead-storybook-helpers  ^6.0.1  →  ^6.2.1',
    ]);
    updatePackageJson.mockImplementation(() => ({ hello: 'hi' }));
    updatePackageLock.mockImplementation(() => {});
  });

  it('should run commands to create pr', async () => {
    await bumpSimorghPackages(BUMPED_PACKAGES, generatedBranchName);

    expect(getPublishedPackages).toBeCalledWith(BUMPED_PACKAGES);
    expect(getPackageNames).toBeCalledWith(Object.keys(PUBLISHED_PACKAGES));

    expect(getRemoteFile).toBeCalledWith({
      repoName,
      branch: 'latest',
      path,
    });
    expect(getUpdates).toBeCalledWith(
      PACKAGE_JSON.dependencies,
      PUBLISHED_PACKAGES,
    );
    expect(getUpdates).toBeCalledWith(
      PACKAGE_JSON.devDependencies,
      PUBLISHED_PACKAGES,
    );

    expect(createRemoteBranch).toBeCalledWith({
      newBranch: generatedBranchName,
      repoName,
    });

    expect(updatePackageJson).toBeCalledWith(
      PACKAGE_JSON,
      PUBLISHED_PACKAGES,
      generatedBranchName,
    );
    expect(updatePackageLock).toBeCalledWith(
      { hello: 'hi' },
      generatedBranchName,
    );
    expect(createPullRequest).toBeCalledWith({
      branchName: generatedBranchName,
      repoName,
      title: 'Talos - Bump packages',
      body: mockPrBody,
    });
  });
});
