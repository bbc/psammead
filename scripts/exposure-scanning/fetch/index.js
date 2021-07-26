import pkg from '@octokit/rest';

const { Octokit } = pkg;

const octokit = new Octokit();

const fetchPrBody = async reqBody => {
  const {
    data: { body },
  } = await octokit.request('GET /repos/{owner}/{repo}/pulls/{prId}', reqBody);
  return body;
};

const fetchPrComments = async reqBody => {
  const prComments = await octokit.request(
    'GET /repos/{owner}/{repo}/issues/{prId}/comments',
    reqBody,
  );
  return prComments.data.map(comment => ({
    id: comment.id,
    body: comment.body,
  }));
};

const fetchPrReviewComments = async reqBody => {
  const prReviewComments = await octokit.request(
    'GET /repos/{owner}/{repo}/pulls/{prId}/comments',
    reqBody,
  );
  return prReviewComments.data.map(comment => ({
    id: comment.id,
    body: comment.body,
  }));
};

const fetchIssueBody = async reqBody => {
  const {
    data: { body },
  } = await octokit.request(
    'GET /repos/{owner}/{repo}/issues/{issueId}',
    reqBody,
  );
  return body;
};

const fetchIssueComments = async reqBody => {
  const issueComments = await octokit.request(
    'GET /repos/{owner}/{repo}/issues/{issueId}/comments',
    reqBody,
  );
  return issueComments.data.map(comment => ({
    id: comment.id,
    body: comment.body,
  }));
};

export const fetchPr = async reqBody => ({
  body: await fetchPrBody(reqBody),
  comments: await fetchPrComments(reqBody),
  reviewComments: await fetchPrReviewComments(reqBody),
});

export const fetchIssue = async reqBody => ({
  body: await fetchIssueBody(reqBody),
  comments: await fetchIssueComments(reqBody),
});
