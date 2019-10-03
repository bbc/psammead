const fs = require('fs');
const shelljs = require('shelljs');
const updatePackageLock = require('./index');
const commitRemoteChanges = require('../../../utilities/commitRemoteChanges');
const readFileSync = require('../../../utilities/readFileSync');
const getRemoteFile = require('../../../utilities/getRemoteFile');

jest.mock('../../../utilities/commitRemoteChanges');
jest.mock('fs', () => ({
  writeFileSync: jest.fn(() => {}),
}));
jest.mock('shelljs', () => ({
  rm: jest.fn(() => {}),
  exec: jest.fn(() => {}),
  mkdir: jest.fn(() => {}),
}));
jest.mock('../../../utilities/readFileSync');
jest.mock('../../../utilities/getRemoteFile');

const mockLockFile = { hello: 'hi' };

describe('updatePackageLock', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    commitRemoteChanges.mockImplementation(async () => {});
    readFileSync.mockImplementation(() => JSON.stringify(mockLockFile));
    getRemoteFile.mockImplementation(async () => ({
      data: { contents: '' },
    }));
  });

  it('should try to update package lock', async () => {
    await updatePackageLock({ home: 'heart' }, 'test-branch');

    expect(readFileSync).toHaveBeenCalledTimes(1);
    expect(readFileSync).toHaveBeenCalledWith(
      './simorgh-package/package-lock.json',
    );

    expect(getRemoteFile).toHaveBeenCalledTimes(1);
    expect(getRemoteFile).toHaveBeenCalledWith({
      repoName: 'simorgh',
      branch: 'latest',
      path: 'package-lock.json',
    });

    expect(fs.writeFileSync).toHaveBeenCalledTimes(2);
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      './simorgh-package/package.json',
      '{"home":"heart"}',
    );
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      './simorgh-package/package-lock.json',
      '',
    );

    expect(shelljs.rm).toHaveBeenCalledTimes(2);
    expect(shelljs.rm).toHaveBeenCalledWith('-rf', './simorgh-package');
    expect(shelljs.rm).toHaveBeenCalledWith('-rf', './simorgh-package');

    expect(shelljs.mkdir).toHaveBeenCalledTimes(1);
    expect(shelljs.mkdir).toHaveBeenCalledWith('./simorgh-package');

    expect(shelljs.exec).toHaveBeenCalledTimes(1);
    expect(shelljs.exec).toHaveBeenCalledWith('npm install', {
      cwd: `./simorgh-package`,
    });

    expect(commitRemoteChanges).toHaveBeenCalledTimes(1);
    expect(commitRemoteChanges).toHaveBeenCalledWith({
      repoName: 'simorgh',
      branchName: 'test-branch',
      path: 'package-lock.json',
      content: JSON.stringify(mockLockFile),
      message: 'Talos - Update package-lock.json',
    });
  });
});
