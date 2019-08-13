import github from 'github-api';
import createPullRequest from '.';

const getPRBody = require('../getPullRequestBody');

jest.mock('../getPullRequestBody', () => jest.fn());
getPRBody.mockImplementation(() => 'pull request body');

jest.mock('github-api');

global.console.log = jest.fn();

const createPullRequestMock = jest.fn();
createPullRequestMock.mockImplementation(() => Promise.resolve('success'));
const getRepoMock = jest.fn(() => ({
  createPullRequest: createPullRequestMock,
}));
const githubMock = jest.fn(() => ({
  getRepo: getRepoMock,
}));

github.mockImplementation(githubMock);

process.env.GITHUB_TOKEN = 'fake_github_token';

describe('createPullRequest', () => {
  it('should call github-api correctly', async () => {
    await createPullRequest({
      packages: ['@bbc/apples', '@bbc/pears'],
      bumpedPackages: ['@bbc/grapes', '@bbc/oranges'],
      branchName: 'foobar',
    });

    expect(githubMock).toHaveBeenCalledWith({ token: 'fake_github_token' });
    expect(getRepoMock).toHaveBeenCalledWith('bbc', 'psammead');
    expect(createPullRequestMock).toHaveBeenCalledWith({
      base: 'BumperBotIntegrate-new-new-new-new-new',
      body: 'pull request body',
      draft: true,
      head: 'foobar',
      title: 'Talos - Bump @bbc/apples, @bbc/pears',
    });
    expect(global.console.log).toHaveBeenCalledWith(
      '* Creating Pull Request with title "Talos - Bump @bbc/apples, @bbc/pears"',
    );
  });

  it('should should not catch its own errors', async () => {
    createPullRequestMock.mockImplementation(() =>
      Promise.reject(new Error('something bad happened')),
    );

    await createPullRequest({
      packages: ['@bbc/apples', '@bbc/pears'],
      bumpedPackages: ['@bbc/grapes', '@bbc/oranges'],
      branchName: 'foobar',
    }).catch(e => {
      expect(e.message).toEqual('something bad happened');
    });
  });
});
