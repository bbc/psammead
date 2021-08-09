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

const fetchPrBody = async reqBody => {
  const {
    data: { body },
  } = await octokit.request('GET /repos/{owner}/{repo}/pulls/{id}', reqBody);
  return body;
};

const fetchPrComments = async reqBody => {
  const { data } = await octokit.request(
    'GET /repos/{owner}/{repo}/issues/{id}/comments',
    reqBody,
  );
  return data.map(({ id, body }) => ({
    id,
    body,
  }));
};

const fetchPrReviewComments = async reqBody => {
  const { data } = await octokit.request(
    'GET /repos/{owner}/{repo}/pulls/{id}/comments',
    reqBody,
  );
  return data.map(({ id, body }) => ({
    id,
    body,
  }));
};

const fetchIssueBody = async reqBody => {
  const {
    data: { body },
  } = await octokit.request('GET /repos/{owner}/{repo}/issues/{id}', reqBody);
  return body;
};

const fetchIssueComments = async reqBody => {
  const { data } = await octokit.request(
    'GET /repos/{owner}/{repo}/issues/{id}/comments',
    reqBody,
  );
  return data.map(({ id, body }) => ({
    id,
    body,
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
