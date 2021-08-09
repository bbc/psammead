/* eslint-disable global-require */
let octokit;

(async () => {
  if (process.env.GITHUB_ACTION && process.env.GITHUB_TOKEN) {
    const { Octokit } = await import('@octokit/action');
    octokit = new Octokit();
  } else {
    const { Octokit } = await import('@octokit/rest');
    octokit = new Octokit();
  }
})();

const patchPrBody = async (reqBody, body) => {
  await octokit.request('PATCH /repos/{owner}/{repo}/pulls/{id}', {
    ...reqBody,
    body,
  });
};

const patchReviewComments = async (reqBody, comments) => {
  await Promise.all(
    comments.map(({ id, body }) =>
      octokit.request('PATCH /repos/{owner}/{repo}/pulls/comments/{id}', {
        owner: reqBody.owner,
        repo: reqBody.repo,
        id,
        body,
      }),
    ),
  );
};

const patchComments = async (reqBody, comments) => {
  await Promise.all(
    comments.map(({ id, body }) =>
      octokit.request('PATCH /repos/{owner}/{repo}/issues/comments/{id}', {
        ...reqBody,
        id,
        body,
      }),
    ),
  );
};

const patchIssueBody = async (reqBody, body) => {
  await octokit.request('PATCH /repos/{owner}/{repo}/issues/{id}', {
    ...reqBody,
    body,
  });
};

export const patchPr = async (reqBody, { body, comments, reviewComments }) => {
  await Promise.all([
    patchPrBody(reqBody, body),
    patchComments(reqBody, comments),
    patchReviewComments(reqBody, reviewComments),
  ]);
};

export const patchIssue = async (reqBody, { body, comments }) => {
  await Promise.all([
    patchIssueBody(reqBody, body),
    patchComments(reqBody, comments),
  ]);
};
