const replacementStr = '*';

export const scanText = (text, regex) => {
  let foundTextMatch = false;
  const scannedText = text.replace(regex, replacementStr);

  if (scannedText !== text) {
    foundTextMatch = true;
  }

  return { body: scannedText, foundTextMatch };
};

export const scanComments = (comments, regex) => {
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
  let foundMatch = false;

  try {
    const { body, foundTextMatch } = scanText(pr.body, regex);
    const { comments, foundCommentMatch } = scanComments(pr.comments, regex);
    const {
      comments: reviewComments,
      foundCommentMatch: foundReviewCommentsMatch,
    } = scanComments(pr.reviewComments, regex);

    scannedPr = {
      body,
      comments,
      reviewComments,
    };

    foundMatch =
      foundTextMatch || foundCommentMatch || foundReviewCommentsMatch;
  } catch (error) {
    throw new Error('Encountered an error when scanning.');
  }

  return { ...scannedPr, foundMatch };
};

export const scanIssue = (issue, regex) => {
  let scannedIssue = issue;
  let foundMatch = false;

  try {
    const { body, foundTextMatch } = scanText(issue.body, regex);
    const { comments, foundCommentMatch } = scanComments(issue.comments, regex);

    scannedIssue = {
      body,
      comments,
    };

    foundMatch = foundTextMatch || foundCommentMatch;
  } catch (error) {
    throw new Error('Encountered an error when scanning.');
  }

  return { ...scannedIssue, foundMatch };
};
