const isValidId = id => {
  try {
    return !Number.isNaN(id) && Number.isInteger(parseFloat(id));
  } catch {
    return false;
  }
};

const parseArgs = argv => {
  if (argv.length !== 8) {
    throw new Error(
      'Error: Incorrect number of args.\nUsage: node scan.js --experimental-modules --unhandled-rejections=strict <repo> <-pr/-issue> <id> <regex>',
    );
  }

  const repo = argv[4];
  const flag = argv[5]; // -pr or -issue
  const id = argv[6];
  const regexString = argv[7];

  if (isValidId(id)) {
    return { repo, flag, id, regexString };
  }

  throw new Error('Error: Invalid issue id');
};

export default parseArgs;
