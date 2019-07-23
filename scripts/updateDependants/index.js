const fs = require('fs');

const filePath = 'published.txt';

try {
  if (fs.existsSync(filePath)) {
    const published = fs
      .readFileSync(filePath)
      .toString()
      .split(',')
      .filter(Boolean);

    published.forEach(packageName => {
      // eslint-disable-next-line no-console
      console.log(`The package ${packageName} was published!`);
    });
  } else {
    // eslint-disable-next-line no-console
    console.log(`No packages were published!`);
  }
} catch (err) {
  // eslint-disable-next-line no-console
  console.error(err);
}
