const urlLink = require('../../src/models/url-link');

test('returns a block from a link XML node', () => {
  const text = 'foo text';
  const locator = 'https://example.com/foo';
  const blocks = [
    { type: 'foo type', model: { text: 'foo text', attributes: [] } },
  ];

  const urlLinkBlock = urlLink(text, locator, blocks);

  expect(urlLinkBlock).toStrictEqual({
    type: 'urlLink',
    model: {
      text: 'foo text',
      locator: 'https://example.com/foo',
      blocks: [
        {
          type: 'foo type',
          model: {
            text: 'foo text',
            attributes: [],
          },
        },
      ],
    },
  });
});
