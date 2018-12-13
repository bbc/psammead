/* eslint-disable no-console */
const chalk = require('chalk');

module.exports = attempted => {
  const successfulCount = attempted.success.length;
  const failureCount = attempted.failure.length;
  const total = successfulCount + failureCount;

  const SuccessMessage = successfulCount
    ? chalk.green(`${successfulCount} Successful, `)
    : '';

  const FailureMessage = failureCount
    ? chalk.red(`${failureCount} Failed, `)
    : '';

  console.log(
    `\n\nPublished: ${SuccessMessage}${FailureMessage}${total} total`,
  );

  if (successfulCount) {
    console.log(chalk.underline.green('\nSuccessful'));
    attempted.success.forEach(packageTag =>
      console.log(chalk.green(packageTag)),
    );
  }

  if (failureCount) {
    console.log(chalk.underline.red('\nFailed'));
    attempted.failure.forEach(packageTag => console.log(chalk.red(packageTag)));

    // Exit with failure code if any packages failed to publish
    process.exit(1);
  }
};
