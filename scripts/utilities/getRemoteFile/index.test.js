const getRemoteFile = require('.');
const getGhRepo = require('../getGhRepo');

jest.mock('../getGhRepo');
const getContentsMock = jest.fn(async () => ({
  data: { content: 'eyJnZXJhbGQiOiAicGhhcmluIn0=' },
}));
getGhRepo.mockImplementation(() => ({
  getContents: getContentsMock,
}));

const path = 'package.file';

describe('getRemoteFile', () => {
  it('should call the methods with right defaults', async () => {
    await getRemoteFile({ path });

    expect(getGhRepo).toBeCalledWith(undefined, undefined);
    expect(getContentsMock).toBeCalledWith('latest', path);
  });

  it('should call the methods with right values', async () => {
    await getRemoteFile({
      path,
      username: 'mc',
      repoName: 'hammer',
      branch: 'touch',
    });

    expect(getGhRepo).toBeCalledWith('mc', 'hammer');
    expect(getContentsMock).toBeCalledWith('touch', path);
  });

  it('should fail with no path', async () => {
    try {
      await getRemoteFile({});
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toEqual('Invalid path');
    }
  });
});
