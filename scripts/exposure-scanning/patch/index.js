/* eslint-disable global-require */
let octokit;

if (process.env.GITHUB_ACTION) {
  const { Octokit } = require('@octokit/action');
  octokit = new Octokit();
} else {
  const { Octokit } = require('@octokit/rest');
  octokit = new Octokit();
}

const patchPrBody = async (reqBody, body) => {
  await octokit.request('PATCH /repos/{owner}/{repo}/pulls/{prId}', {
    ...reqBody,
    body,
  });
};

const patchPrReviewComments = async (reqBody, comments) => {
  await comments.map(async ({ id, body }) => {
    await octokit.request(
      'PATCH /repos/{owner}/{repo}/pulls/comments/{commentId}',
      {
        owner: reqBody.owner,
        repo: reqBody.repo,
        commentId: id,
        body,
      },
    );
  });
};

const patchPrComments = async (reqBody, comments) => {
  await comments.forEach(async ({ id, body }) => {
    await octokit.request(
      'PATCH /repos/{owner}/{repo}/issues/comments/{commentId}',
      {
        ...reqBody,
        commentId: id,
        body,
      },
    );
  });
};

const patchIssueBody = async (reqBody, body) => {
  await octokit.request('PATCH /repos/{owner}/{repo}/issues/{issueId}', {
    ...reqBody,
    body,
  });
};

const patchIssueComments = async (reqBody, comments) => {
  await comments.forEach(async ({ id, body }) => {
    await octokit.request(
      'PATCH /repos/{owner}/{repo}/issues/comments/{commentId}',
      {
        ...reqBody,
        commentId: id,
        body,
      },
    );
  });
};

export const patchPr = async (reqBody, { body, comments, reviewComments }) => {
  await Promise.all([
    patchPrBody(reqBody, body),
    patchPrComments(reqBody, comments),
    patchPrReviewComments(reqBody, reviewComments),
  ]);
};

export const patchIssue = async (reqBody, { body, comments }) => {
  await Promise.all([
    patchIssueBody(reqBody, body),
    patchIssueComments(reqBody, comments),
  ]);
};
