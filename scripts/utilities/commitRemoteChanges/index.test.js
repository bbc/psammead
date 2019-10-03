const commitRemoteChanges = require('.');
const getGhRepo = require('../getGhRepo');

jest.mock('../getGhRepo');
const writeFileMock = jest.fn(async () => ({
  data: {},
}));
getGhRepo.mockImplementation(() => ({
  writeFile: writeFileMock,
}));

const branchName = 'ting';
const content = '42';
const message = 'The answer the life the universe and everything';
const path = 'to-freedom';

describe('commitRemoteChanges', () => {
  it('should call the methods with right defaults', async () => {
    await commitRemoteChanges({ branchName, path, content, message });

    expect(getGhRepo).toBeCalledWith(undefined, undefined);
    expect(writeFileMock).toBeCalledWith(
      branchName,
      path,
      content,
      message,
      {},
    );
  });

  it('should call the methods with right arguments', async () => {
    await commitRemoteChanges({
      branchName,
      path,
      content,
      message,
      username: 'bbc',
      repoName: 'psalos',
    });

    expect(getGhRepo).toBeCalledWith('bbc', 'psalos');
    expect(writeFileMock).toBeCalledWith(
      branchName,
      path,
      content,
      message,
      {},
    );
  });

  it('should fail with no branch', async () => {
    try {
      await commitRemoteChanges({ path, content, message });
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toEqual('Invalid branch name');
    }
  });

  it('should fail with no path', async () => {
    try {
      await commitRemoteChanges({ branchName, content, message });
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toEqual('Invalid repository path');
    }
  });

  it('should fail with no content', async () => {
    try {
      await commitRemoteChanges({ branchName, path, message });
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toEqual('Invalid commit content');
    }
  });

  it('should fail with no message', async () => {
    try {
      await commitRemoteChanges({ branchName, path, content });
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toEqual('Invalid commit message');
    }
  });
});
