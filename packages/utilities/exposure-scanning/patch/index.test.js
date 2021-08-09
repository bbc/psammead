const { Headers, Response } = jest.requireActual('node-fetch');

const mockHeaders = new Headers({ 'Content-Type': 'application/json' });

const ResponseInit = {
  url: 'hello',
  headers: mockHeaders,
  status: 200,
};

const mockRes = new Response(
  JSON.stringify({
    test: 'test',
  }),
  ResponseInit,
);

const mockFetch = jest.fn();
jest.mock('node-fetch', () => ({
  default: async (url, params) => {
    mockFetch(url, JSON.parse(params.body).body);
    return mockRes.clone();
  },
}));

const { patchPr, patchIssue } = require('.');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Patching', () => {
  it('should call fetch 5 times for the body, comments and review comments endpoints', async () => {
    const reqBody = {
      owner: 'bbc',
      repo: 'psamemad',
      id: '1234',
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

    await patchPr(reqBody, pr);

    expect(mockFetch).toHaveBeenCalledTimes(5);

    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.github.com/repos/bbc/psamemad/pulls/1234',
      pr.body,
    );
    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.github.com/repos/bbc/psamemad/issues/comments/1',
      pr.comments[0].body,
    );
    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.github.com/repos/bbc/psamemad/issues/comments/2',
      pr.comments[1].body,
    );
    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.github.com/repos/bbc/psamemad/pulls/comments/3',
      pr.reviewComments[0].body,
    );
    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.github.com/repos/bbc/psamemad/pulls/comments/4',
      pr.reviewComments[1].body,
    );
  });

  it('should call fetch 2 times for the body and comments endpoints', async () => {
    const reqBody = {
      owner: 'bbc',
      repo: 'psammead',
      id: '4512',
    };

    const issue = {
      body: '* Body',
      comments: [{ id: 5, body: 'Nice *' }],
    };

    await patchIssue(reqBody, issue);

    expect(mockFetch).toHaveBeenCalledTimes(2);

    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.github.com/repos/bbc/psammead/issues/4512',
      issue.body,
    );
    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.github.com/repos/bbc/psammead/issues/comments/5',
      issue.comments[0].body,
    );
  });

  it('should not patch any more than 20 comments', async () => {
    const reqBody = {
      owner: 'bbc',
      repo: 'psammead',
      id: '100000',
    };

    const comments = new Array(45).fill().map((_, i) => ({
      id: i,
      body: `Comment number ${i}`,
    }));

    const issue = {
      body: 'PR Body',
      comments,
    };

    await patchIssue(reqBody, issue);

    expect(mockFetch).toHaveBeenCalledTimes(21);
    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.github.com/repos/bbc/psammead/issues/comments/19',
      'Comment number 19',
    );
    expect(mockFetch).not.toHaveBeenCalledWith(
      'https://api.github.com/repos/bbc/psammead/issues/comments/20',
      'Comment number 20',
    );
  });
});
