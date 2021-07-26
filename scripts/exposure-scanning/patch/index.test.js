/* eslint-disable no-console */
/* eslint-disable no-empty */
jest.mock('node-fetch');

console.log = jest.fn();
console.error = jest.fn();

const nodeFetch = require('node-fetch');

const { patchPr, patchIssue } = require('.');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Patching', () => {
  it('should call fetch 5 times for the body, comments and review comments endpoints', async () => {
    const reqBody = {
      owner: 'bbc',
      repo: 'psamemad',
      prId: '1234',
    };

    const pr = {
      body: 'PR *',
      comments: [
        { id: 1, body: 'Added *' },
        { id: 2, body: 'Nice work, LGTM!' },
      ],
      reviewComments: [
        { id: 3, body: 'Smashed it!' },
        { id: 4, body: 'Should there be * * for this?' },
      ],
    };

    try {
      await patchPr(reqBody, pr);
    } catch (error) {}
    expect(nodeFetch).toHaveBeenCalledTimes(5);
  });

  it('should call fetch 2 times for the body and comments endpoints', async () => {
    const reqBody = {
      owner: 'bbc',
      repo: 'psammead',
      issueId: '4512',
    };

    const issue = {
      body: '* Body',
      comments: [{ id: 5, body: 'Nice *' }],
    };

    try {
      await patchIssue(reqBody, issue);
    } catch (error) {}
    expect(nodeFetch).toHaveBeenCalledTimes(2);
  });
});
