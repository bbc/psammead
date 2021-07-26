const replacementStr = '*';

let foundMatch = false;

const scanText = (text, regex) => {
  const scannedText = text.replace(regex, replacementStr);

  if (scannedText !== text) {
    foundMatch = true;
  }

  return scannedText;
};

const scanComments = (comments, regex) => {
  const scannedComments = [];

  comments.forEach(({ id, body }) => {
    if (regex.test(body)) {
      foundMatch = true;
      scannedComments.push({
        id,
        body: body.replace(regex, replacementStr),
      });
    }
  });

  return scannedComments;
};

export const scanPr = (pr, regex) => {
  let scannedPr = pr;

  try {
    scannedPr = {
      body: scanText(pr.body, regex),
      comments: scanComments(pr.comments, regex),
      reviewComments: scanComments(pr.reviewComments, regex),
    };
  } catch (error) {
    throw new Error(`Encountered an error when scanning: ${error}`);
  }

  return { ...scannedPr, foundMatch };
};

export const scanIssue = (issue, regex) => {
  foundMatch = false;
  let scannedIssue = issue;

  try {
    scannedIssue = {
      body: scanText(issue.body, regex),
      comments: scanComments(issue.comments, regex),
    };
  } catch (error) {
    throw new Error(`Encountered an error when scanning: ${error}`);
  }

  return { ...scannedIssue, foundMatch };
};
