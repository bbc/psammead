const isValidId = id => {
  try {
    return !Number.isNaN(id) && Number.isInteger(parseFloat(id));
  } catch {
    return false;
  }
};

const parseArgs = argv => {
  if (argv.length !== 6) {
    throw new Error(
      'Incorrect number of args.\nUsage: node scripts/exposure-scanning <repo> <-pr/-issue> <id> <regex>',
    );
  }

  const repo = argv[2];
  const flag = argv[3]; // -pr or -issue
  const id = argv[4];
  const regexString = argv[5];

  if (isValidId(id)) {
    return { repo, flag, id, regexString };
  }

  throw new Error('Invalid issue/pr id');
};

export default parseArgs;
