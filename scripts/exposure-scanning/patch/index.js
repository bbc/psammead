import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

const patchPrBody = async (reqBody, body) => {
  const res = await octokit.request(
    'PATCH /repos/{owner}/{repo}/pulls/{prId}',
    {
      ...reqBody,
      body,
    },
  );

  return res;
};

const patchPrReviewComments = async (reqBody, comments) => {
  const res = comments.map(async ({ id, body }) => {
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

  return res;
};

const patchPrComments = async (reqBody, comments) => {
  const res = comments.forEach(async ({ id, body }) => {
    await octokit.request(
      'PATCH /repos/{owner}/{repo}/issues/comments/{commentId}',
      {
        ...reqBody,
        commentId: id,
        body,
      },
    );
  });

  return res;
};

const patchIssueBody = async (reqBody, body) => {
  await octokit.request('PATCH /repos/{owner}/{repo}/pulls/{prId}', {
    ...reqBody,
    body,
  });
};

const patchIssueComments = async (reqBody, comments) => {
  comments.forEach(async ({ id, body }) => {
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
  const patchedPr = await Promise.all([
    patchPrBody(reqBody, body),
    patchPrComments(reqBody, comments),
    patchPrReviewComments(reqBody, reviewComments),
  ]);

  return patchedPr;
};

export const patchIssue = async (reqBody, { body, comments }) => {
  const patchedIssue = await Promise.all([
    patchIssueBody(reqBody, body),
    patchIssueComments(reqBody, comments),
  ]);

  return patchedIssue;
};
