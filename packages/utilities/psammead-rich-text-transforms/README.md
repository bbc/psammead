# `rich-text-transforms`

This libary provides two functions, one that takes candyXML, and one that takes
a string. Both return rich text as structured JSON. The structured JSON uses the
format that Optimo have opted for, see BBC confluence `cps/Optimo+Client+Text+Blocks` for more details.

## Supported block types

The Optimo format consists of an array of nested ‘blocks’, where a block has a
“type” (such as paragraph), and “model”. The model can contain fields such as
‘text’, attributes on that text - such as ‘bold’. The model can also contain an
array of child blocks.

There are many types of block available.

Currently, this library only supports the following block types:
- paragraph
- text
- urlLink
- fragment

## Installation

Add the following to the `dependencies` block in `package.json`:

```javascript
{
  "@bbc/psammead-rich-text-transforms": "^1.0.0"
}
```

## Usage

### `candyXmlToRichText`
```
const { candyXmlToRichText } = require("@bbc/psammead-rich-text-transforms")

const xml = `
<body>
  <paragraph>
    Read more:
      <link>
        <caption>foo</caption>
        <url href="https://example.com/foo"/>
      </link> bar <bold>baz</bold>
  </paragraph>
</body>
`

candyXmlToRichText(xml)
```
```json
 {
  "type": "text",
    "model": {
      "blocks": [
      {
        "type": "paragraph",
        "model": {
          "text": "Read more: foo bar baz",
          "blocks": [
            {
              "type": "fragment",
              "model": {
                "text": "Read more: ",
                "attributes": []
              }
            },
          {
            "type": "urlLink",
            "model": {
              "text": "foo",
              "locator": "https://example.com/foo",
              "blocks": [
                {
                  "type": "fragment",
                  "model": {
                    "text": "foo",
                    "attributes": []
                  }
                }
              ]
            }
          },
          {
            "type": "fragment",
            "model": {
              "text": " bar ",
              "attributes": []
            }
          },
          {
            "type": "fragment",
            "model": {
              "text": "baz",
              "attributes": [
                "bold"
              ]
            }
          }
        ]
      }
    }
  ]
}
```

### `stringToRichText`
```
const stringToRichText = require("@bbc/psammead-rich-text-transforms")

const string = "Hello world"

stringToRichText(string)
```
```json
{
  "type": "text",
  "model": {
    "blocks": [
      {
        "type": "paragraph",
        "model": {
          "text": "Hello world",
          "blocks": [
            {
              "type": "fragment",
              "model": {
                "text": "Hello world",
                "attributes": []
              }
            }
          ]
        }
      }
    ]
  }
}
```
