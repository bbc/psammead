const Github = require('github-api');
const getGhRepo = require('.');

jest.mock('github-api');

process.env.GITHUB_TOKEN = 'fake_github_token';

const getRepoMock = jest.fn(() => {});
const githubMock = jest.fn(() => ({
  getRepo: getRepoMock,
}));
Github.mockImplementation(githubMock);

describe('getGhRepo', () => {
  it('should call Github.getRepo with the right defaults', async () => {
    await getGhRepo();
    expect(Github).toBeCalledWith({ token: 'fake_github_token' });
    expect(Github).toBeCalledTimes(1);
    expect(getRepoMock).toBeCalledWith('bbc', 'psammead');
    expect(getRepoMock).toBeCalledTimes(1);
  });

  it('should call Github.getRepo with the right arguments', async () => {
    await getGhRepo('kwashi', 'agbesi');
    expect(getRepoMock).toBeCalledWith('kwashi', 'agbesi');
  });
});
