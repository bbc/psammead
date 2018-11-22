module.exports = {
  rules: {
    "import/no-extraneous-dependencies": ["error", {"packageDir": ['./package.json', '../../package.json']}]
  },
};
