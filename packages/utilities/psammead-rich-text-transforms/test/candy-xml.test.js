const { candyXmlToRichText } = require('../index');

const createBody = inner =>
  `<body xmlns="http://www.bbc.co.uk/asset" xml:space="preserve" xml:base="http://www.bbc.co.uk/article/abc123">${inner}</body>`;

test('can parse XML with a paragraph', () => {
  const richText = candyXmlToRichText(
    createBody('<paragraph>One two three four!</paragraph>'),
  );

  expect(richText).toStrictEqual({
    type: 'text',
    model: {
      blocks: [
        {
          type: 'paragraph',
          model: {
            text: 'One two three four!',
            blocks: [
              {
                type: 'fragment',
                model: {
                  text: 'One two three four!',
                  attributes: [],
                },
              },
            ],
          },
        },
      ],
    },
  });
});

test('can parse XML with a link', () => {
  const richText = candyXmlToRichText(
    createBody(`
      <link>
        <caption>foo</caption>
        <url href="https://example.com/foo"/>
      </link>
    `),
  );

  expect(richText).toEqual({
    type: 'text',
    model: {
      blocks: [
        {
          type: 'urlLink',
          model: {
            text: 'foo',
            locator: 'https://example.com/foo',
            blocks: [
              {
                type: 'fragment',
                model: {
                  text: 'foo',
                  attributes: [],
                },
              },
            ],
          },
        },
      ],
    },
  });
});

test('returns a plain text representation of the data', () => {
  const richText = candyXmlToRichText(
    createBody(`
      <paragraph>Read more: <link><caption>foo</caption><url href="https://example.com/foo"/></link> bar <bold>baz</bold></paragraph>
    `),
  );

  expect(richText).toEqual({
    type: 'text',
    model: {
      blocks: [
        {
          type: 'paragraph',
          model: {
            text: 'Read more: foo bar baz',
            blocks: [
              {
                type: 'fragment',
                model: {
                  text: 'Read more: ',
                  attributes: [],
                },
              },
              {
                type: 'urlLink',
                model: {
                  text: 'foo',
                  locator: 'https://example.com/foo',
                  blocks: [
                    {
                      type: 'fragment',
                      model: {
                        text: 'foo',
                        attributes: [],
                      },
                    },
                  ],
                },
              },
              {
                type: 'fragment',
                model: {
                  text: ' bar ',
                  attributes: [],
                },
              },
              {
                type: 'fragment',
                model: {
                  text: 'baz',
                  attributes: ['bold'],
                },
              },
            ],
          },
        },
      ],
    },
  });
});

test('can parse XML with multiple paragraphs', () => {
  const richText = candyXmlToRichText(
    createBody(`
      <paragraph>foo</paragraph>
      <paragraph>bar</paragraph>
      <paragraph>baz</paragraph>
    `),
  );

  expect(richText).toStrictEqual({
    type: 'text',
    model: {
      blocks: [
        {
          type: 'paragraph',
          model: {
            text: 'foo',
            blocks: [
              {
                type: 'fragment',
                model: {
                  text: 'foo',
                  attributes: [],
                },
              },
            ],
          },
        },
        {
          type: 'paragraph',
          model: {
            text: 'bar',
            blocks: [
              {
                type: 'fragment',
                model: {
                  text: 'bar',
                  attributes: [],
                },
              },
            ],
          },
        },
        {
          type: 'paragraph',
          model: {
            text: 'baz',
            blocks: [
              {
                type: 'fragment',
                model: {
                  text: 'baz',
                  attributes: [],
                },
              },
            ],
          },
        },
      ],
    },
  });
});

test('can render bold text within a paragraph', () => {
  const richText = candyXmlToRichText(
    createBody('<paragraph>One <bold>two</bold> three!</paragraph>'),
  );

  expect(richText).toStrictEqual({
    type: 'text',
    model: {
      blocks: [
        {
          type: 'paragraph',
          model: {
            text: 'One two three!',
            blocks: [
              {
                type: 'fragment',
                model: {
                  text: 'One ',
                  attributes: [],
                },
              },
              {
                type: 'fragment',
                model: {
                  text: 'two',
                  attributes: ['bold'],
                },
              },
              {
                type: 'fragment',
                model: {
                  text: ' three!',
                  attributes: [],
                },
              },
            ],
          },
        },
      ],
    },
  });
});

test('can render italic text within a paragraph', () => {
  const richText = candyXmlToRichText(
    createBody('<paragraph><italic>One</italic> two three!</paragraph>'),
  );

  expect(richText).toStrictEqual({
    type: 'text',
    model: {
      blocks: [
        {
          type: 'paragraph',
          model: {
            text: 'One two three!',
            blocks: [
              {
                type: 'fragment',
                model: {
                  text: 'One',
                  attributes: ['italic'],
                },
              },
              {
                type: 'fragment',
                model: {
                  text: ' two three!',
                  attributes: [],
                },
              },
            ],
          },
        },
      ],
    },
  });
});

test('can render bold italic text within a paragraph', () => {
  const richText = candyXmlToRichText(
    createBody(
      '<paragraph><bold><italic>One</italic></bold> two three!</paragraph>',
    ),
  );

  expect(richText).toStrictEqual({
    type: 'text',
    model: {
      blocks: [
        {
          type: 'paragraph',
          model: {
            text: 'One two three!',
            blocks: [
              {
                type: 'fragment',
                model: {
                  text: 'One',
                  attributes: ['bold', 'italic'],
                },
              },
              {
                type: 'fragment',
                model: {
                  text: ' two three!',
                  attributes: [],
                },
              },
            ],
          },
        },
      ],
    },
  });
});

test('can render bold and italic text within a paragraph', () => {
  const richText = candyXmlToRichText(
    createBody(
      '<paragraph><bold><italic>One</italic> two</bold> three!</paragraph>',
    ),
  );

  expect(richText).toStrictEqual({
    type: 'text',
    model: {
      blocks: [
        {
          type: 'paragraph',
          model: {
            text: 'One two three!',
            blocks: [
              {
                type: 'fragment',
                model: {
                  text: 'One',
                  attributes: ['bold', 'italic'],
                },
              },
              {
                type: 'fragment',
                model: {
                  text: ' two',
                  attributes: ['bold'],
                },
              },
              {
                type: 'fragment',
                model: {
                  text: ' three!',
                  attributes: [],
                },
              },
            ],
          },
        },
      ],
    },
  });
});

test('can render an empty paragraph', () => {
  const richText = candyXmlToRichText(createBody('<paragraph />'));

  expect(richText).toStrictEqual({
    type: 'text',
    model: {
      blocks: [
        {
          type: 'paragraph',
          model: {
            text: '',
            blocks: [],
          },
        },
      ],
    },
  });
});

test('returns null when given invalid xml', () => {
  const richText = candyXmlToRichText('foobar');

  expect(richText).toStrictEqual(null);
});

test('returns plain text if wrapped in an unsupport xml node', () => {
  const richText = candyXmlToRichText(
    createBody(`
      <paragraph><foobar>Struck through text</foobar> followed by normal text</paragraph>
    `),
  );

  expect(richText).toStrictEqual({
    type: 'text',
    model: {
      blocks: [
        {
          type: 'paragraph',
          model: {
            text: 'Struck through text followed by normal text',
            blocks: [
              {
                type: 'fragment',
                model: {
                  text: 'Struck through text',
                  attributes: [],
                },
              },
              {
                type: 'fragment',
                model: {
                  text: ' followed by normal text',
                  attributes: [],
                },
              },
            ],
          },
        },
      ],
    },
  });
});

test('can handle chaos', () => {
  const richText = candyXmlToRichText(
    createBody(`
      <paragraph><foo><bar><bold><meh>Bold text in unsupported nodes</meh></bold></bar></foo> followed by normal text then <italic><this><is>some <bold>carnage<carnage> </carnage></bold></is></this></italic>.</paragraph>
    `),
  );

  expect(richText).toStrictEqual({
    type: 'text',
    model: {
      blocks: [
        {
          type: 'paragraph',
          model: {
            text:
              'Bold text in unsupported nodes followed by normal text then some carnage.',
            blocks: [
              {
                type: 'fragment',
                model: {
                  text: 'Bold text in unsupported nodes',
                  attributes: ['bold'],
                },
              },
              {
                type: 'fragment',
                model: {
                  text: ' followed by normal text then ',
                  attributes: [],
                },
              },
              {
                type: 'fragment',
                model: {
                  text: 'some ',
                  attributes: ['italic'],
                },
              },
              {
                type: 'fragment',
                model: {
                  text: 'carnage',
                  attributes: ['italic', 'bold'],
                },
              },
              {
                type: 'fragment',
                model: {
                  text: '.',
                  attributes: [],
                },
              },
            ],
          },
        },
      ],
    },
  });
});
