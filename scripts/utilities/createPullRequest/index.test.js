const createPullRequest = require('.');
const getGhRepo = require('../getGhRepo');

jest.mock('../getGhRepo');
const createPullRequestMock = jest.fn(async () => ({
  data: {},
}));
getGhRepo.mockImplementation(() => ({
  createPullRequest: createPullRequestMock,
}));

const branchName = 'tarin';
const title = 'Pulling to request';
const body = '6 packs';

describe('createPullRequest', () => {
  it('should call the methods with right defaults', async () => {
    await createPullRequest({ branchName, title, body });

    expect(getGhRepo).toBeCalledWith(undefined, undefined);
    expect(createPullRequestMock).toBeCalledWith({
      title,
      body,
      head: branchName,
      base: 'latest',
    });
  });

  it('should call the methods with right arguments', async () => {
    await createPullRequest({
      branchName,
      title,
      body,
      username: 'bbc',
      repoName: 'psalos',
      base: 'test',
    });

    expect(getGhRepo).toBeCalledWith('bbc', 'psalos');
    expect(createPullRequestMock).toBeCalledWith({
      title,
      body,
      head: branchName,
      base: 'test',
    });
  });

  it('should fail with no branch', async () => {
    try {
      await createPullRequest({ title, body });
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toEqual('Invalid branch name');
    }
  });

  it('should fail with no title', async () => {
    try {
      await createPullRequest({ branchName, body });
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toEqual('Invalid pull request title');
    }
  });

  it('should fail with no body', async () => {
    try {
      await createPullRequest({ title, branchName });
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toEqual('Invalid pull request body');
    }
  });
});
