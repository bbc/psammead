const RegClient = require('npm-registry-client');
const util = require('util');

const PARAMS = { timeout: 1000 };

const createUri = name => {
  return `https://registry.npmjs.org/${name}`;
};

const whitelist = /^psammead-[a-zA-Z0-9-]*$|^gel-[a-zA-Z0-9-]*$/;

const checkPackage = name => {
  const dirStructure = name.split('/');
  const packageName = dirStructure[dirStructure.length - 1];
  const result = whitelist.test(packageName);

  return result;
};

const client = new RegClient();
const get = util.promisify(client.get.bind(client));
// Get version of package in NPM regsitry. Returns 0.0.0 if doesn't exist.
module.exports = async name => {
  if (!checkPackage(name)) return 'fuck';

  return get(createUri(name), PARAMS);
};
