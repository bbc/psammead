import github from 'github-api';
import createPullRequest from '.';

const getPRBody = require('../getPullRequestBody');

jest.mock('../getPullRequestBody', () => jest.fn());
getPRBody.mockImplementation(() => 'pull request body');

jest.mock('github-api');

global.console.log = jest.fn();

const createPullRequestMock = jest.fn();
const getRepoMock = jest.fn(() => ({
  createPullRequest: createPullRequestMock,
}));
const githubMock = jest.fn(() => ({
  getRepo: getRepoMock,
}));

github.mockImplementation(githubMock);

process.env.GITHUB_TOKEN = 'fake_github_token';

describe('createPullRequest', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    createPullRequestMock.mockImplementation(() => Promise.resolve('success'));
  });

  it('should call github-api correctly', async () => {
    await createPullRequest({
      packages: ['@bbc/apples', '@bbc/pears'],
      bumpedPackagesObj: {
        '@bbc/apples': ['package1  ^1.2  →  ^1.4'],
        '@bbc/pears': ['package1  ^1.2  →  ^1.4', 'package2  ^1.0  →  ^1.1'],
      },
      branchName: 'foobar',
    });

    expect(githubMock).toHaveBeenCalledWith({ token: 'fake_github_token' });
    expect(getRepoMock).toHaveBeenCalledWith('bbc', 'psammead');
    expect(createPullRequestMock).toHaveBeenCalledWith({
      body: 'pull request body',
      base: 'latest',
      head: 'foobar',
      title: 'Talos - Bump @bbc/apples, @bbc/pears',
    });
    expect(global.console.log).toHaveBeenCalledWith(
      '* Creating Pull Request with title "Talos - Bump @bbc/apples, @bbc/pears"',
    );
  });

  it('should not catch its own errors', async () => {
    createPullRequestMock.mockImplementation(() =>
      Promise.reject(new Error('something bad happened')),
    );

    await createPullRequest({
      packages: ['@bbc/apples', '@bbc/pears'],
      bumpedPackages: {
        '@bbc/apples': ['package1  ^1.2  →  ^1.4'],
        '@bbc/pears': ['package1  ^1.2  →  ^1.4', 'package2  ^1.0  →  ^1.1'],
      },
      branchName: 'foobar',
    }).catch(e => {
      expect(e.message).toEqual('something bad happened');
    });
  });

  it('should shorten the title', async () => {
    await createPullRequest({
      packages: ['@bbc/apples', '@bbc/pears', '@bbc/grapes', '@bbc/oranges'],
      bumpedPackages: {
        '@bbc/apples': ['package1  ^1.2  →  ^1.4'],
        '@bbc/pears': ['package1  ^1.2  →  ^1.4', 'package2  ^1.0  →  ^1.1'],
        '@bbc/grapes': ['package1  ^1.2  →  ^1.4'],
        '@bbc/oranges': ['package1  ^1.2  →  ^1.4'],
      },
      branchName: 'foobar',
    });
    expect(createPullRequestMock).toHaveBeenCalledWith({
      body: 'pull request body',
      base: 'latest',
      head: 'foobar',
      title: 'Talos - Bump @bbc/apples, @bbc/pears, @bbc/grapes...',
    });
    expect(global.console.log).toHaveBeenCalledWith(
      '* Creating Pull Request with title "Talos - Bump @bbc/apples, @bbc/pears, @bbc/grapes..."',
    );
  });
});
