const fs = require('fs');

const published = fs
  .readFileSync('published.txt')
  .toString()
  .split(',')
  .filter(Boolean);

published.forEach(packageName => {
  // eslint-disable-next-line no-console
  console.log(`The package ${packageName} was published!`);
});
