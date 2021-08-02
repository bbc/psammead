const replacementStr = '*';

const scanText = (text, regex) => {
  let foundTextMatch = false;
  const scannedText = text.replace(regex, replacementStr);

  if (scannedText !== text) {
    foundTextMatch = true;
  }

  return { body: scannedText, foundTextMatch };
};

const scanComments = (comments, regex) => {
  let foundCommentMatch = false;
  const scannedComments = [];

  comments.forEach(({ id, body }) => {
    if (regex.test(body)) {
      foundCommentMatch = true;
      scannedComments.push({
        id,
        body: body.replace(regex, replacementStr),
      });
    }
  });

  return { comments: scannedComments, foundCommentMatch };
};

export const scanPr = (pr, regex) => {
  let scannedPr = pr;

  const { body, foundTextMatch } = scanText(pr.body, regex);
  const { comments, foundCommentMatch } = scanComments(pr.comments, regex);
  const {
    reviewComments,
    foundCommentMatch: foundReviewCommentsMatch,
  } = scanComments(pr.reviewComments, regex);

  try {
    scannedPr = {
      body,
      comments,
      reviewComments,
    };
  } catch (error) {
    throw new Error(`Encountered an error when scanning.`);
  }

  return {
    ...scannedPr,
    foundMatch: foundTextMatch || foundCommentMatch || foundReviewCommentsMatch,
  };
};

export const scanIssue = (issue, regex) => {
  let scannedIssue = issue;

  const { body, foundTextMatch } = scanText(issue.body, regex);
  const { comments, foundCommentMatch } = scanComments(issue.comments, regex);

  try {
    scannedIssue = {
      body,
      comments,
    };
  } catch (error) {
    throw new Error(`Encountered an error when scanning.`);
  }

  return { ...scannedIssue, foundMatch: foundTextMatch || foundCommentMatch };
};
