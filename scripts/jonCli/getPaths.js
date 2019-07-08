const glob = require('glob');

module.exports = filename =>
  glob.sync(`**/*/${filename}`, { ignore: ['**/node_modules/**'] });
