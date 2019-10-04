const BLOCK_NAME = 'urlLink';

const urlLink = (text, locator, blocks) => {
  return {
    type: BLOCK_NAME,
    model: { text, locator, blocks },
  };
};

module.exports = urlLink;
