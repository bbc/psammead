/* eslint-disable no-console */
/* eslint-disable import/extensions */
import parseArgs from '../args/index.js';
import { fetchPr, fetchIssue } from '../fetch/index.js';
import { scanPr, scanIssue } from '../scan/index.js';
import { patchPr, patchIssue } from '../patch/index.js';

const redactPr = async (reqBody, regex) => {
  const pr = await fetchPr(reqBody);

  const scannedPr = await scanPr(pr, regex);

  if (scannedPr.foundMatch) {
    await patchPr(reqBody, scannedPr);
    throw new Error('Match found.');
  }
};

const redactIssue = async (reqBody, regex) => {
  const issue = await fetchIssue(reqBody);

  const scannedIssue = await scanIssue(issue, regex);

  if (scannedIssue.foundMatch) {
    await patchIssue(reqBody, scannedIssue);
    throw new Error('Match found.');
  }
};

const scanExposures = async () => {
  const { repo, flag, id, regexString } = parseArgs(process.argv);

  const regex = new RegExp(regexString, 'gi');

  const reqBody = {
    owner: 'bbc',
    repo,
    id,
  };

  await {
    '-pr': redactPr,
    '-issue': redactIssue,
  }[flag](reqBody, regex);

  return 'No matches found.';
};

export default scanExposures;
