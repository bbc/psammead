const createRemoteBranch = require('.');
const getGhRepo = require('../getGhRepo');

jest.mock('../getGhRepo');
const createBranchMock = jest.fn(async () => ({
  data: {},
}));
getGhRepo.mockImplementation(() => ({
  createBranch: createBranchMock,
}));

const newBranch = 'dr3los';

describe('createRemoteBranch', () => {
  it('should call the methods with right defaults', async () => {
    await createRemoteBranch({ newBranch });

    expect(getGhRepo).toBeCalledWith(undefined, undefined);
    expect(createBranchMock).toBeCalledWith('latest', newBranch);
  });

  it('should call the methods with right arguments', async () => {
    await createRemoteBranch({
      newBranch,
      username: 'bbc',
      repoName: 'psalos',
      oldBranch: 'test',
    });

    expect(getGhRepo).toBeCalledWith('bbc', 'psalos');
    expect(createBranchMock).toBeCalledWith('test', newBranch);
  });

  it('should fail with no new branch', async () => {
    try {
      await createRemoteBranch({});
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toEqual('Invalid new branch name');
    }
  });
});
