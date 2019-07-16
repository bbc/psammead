/* eslint-disable no-console */
const chalk = require('chalk');

module.exports = transactionLog => {
  const unpublished = [];
  const successful = [];
  const failure = [];
  const total = transactionLog.length;

  transactionLog.forEach(transaction => {
    if (transaction.status === false && transaction.failure === false) {
      // Unpublished
      unpublished.push(transaction);
    } else if (transaction.status === true && transaction.failure === false) {
      // Successful publish
      successful.push(transaction);
    } else {
      // Otheriwse it is a failure
      failure.push(transaction);
    }
  });

  const UnpublishedMessafe = unpublished.length
    ? chalk.grey(`${unpublished.length} Unpublished, `)
    : '';

  const SuccessMessage = successful.length
    ? chalk.green(`${successful.length} Successful, `)
    : chalk.green(`0 Successful, `);

  const FailureMessage = failure ? chalk.red(`${failure.length} Failed, `) : '';

  console.log(
    `\n\nPublished: ${UnpublishedMessafe}${SuccessMessage}${FailureMessage}${total} total`,
  );

  if (unpublished.length) {
    console.log(chalk.underline.white('\nUnpublished'));
    unpublished.forEach(pack =>
      console.log(chalk.grey(pack.packageReleaseTag)),
    );
  }

  if (successful.length) {
    console.log(chalk.underline.green('\nSuccessful'));
    successful.forEach(pack =>
      console.log(chalk.green(pack.packageReleaseTag)),
    );
  }

  if (failure.length) {
    console.log(chalk.underline.red('\nFailed'));
    failure.forEach(pack => console.log(chalk.red(pack.packageReleaseTag)));

    // Exit with failure code if any packages failed to publish
    process.exit(1);
  }
};
