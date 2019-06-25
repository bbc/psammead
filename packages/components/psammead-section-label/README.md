# psammead-section-label - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-section-label%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-section-label%2Fpackage.json) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/section-label--default) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-section-label.svg)](https://www.npmjs.com/package/@bbc/psammead-section-label) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `@bbc/psammead-section-label` package exports one component - a Section Label.

For colours and font family it uses `@bbc/psammead-styles` and `@bbc/gel-foundations` for spacing and GEL Typography implemented in Styled Components.

The only provided child should be the title for the section, provided as a _string_, which will be wrapped in an `<h2>` element by the component – (see [the Accessibility notes](#accessibility-notes)).

## Installation

`npm install @bbc/psammead-section-label`

## Props

<!-- prettier-ignore -->
| Argument  | Type | Required | Default | Example |
| --------- | ---- | -------- | ------- | ------- |
| bar | boolean | no | `true` | `false` |
| visuallyHidden | boolean | no | `false ` | `true` |
| children | string | yes | N/A | `'Most Read'` |
| dir | string | no | `'ltr'` | `'rtl'` |
| labelId | string | yes | N/A | `top-stories-label` |
| script | object | yes | N/A | { canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36' }, groupD: { fontSize: '44', lineHeight: '48' } }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24' }, groupB: { fontSize: '24', lineHeight: '28' }, groupD: { fontSize: '32', lineHeight: '36' } } } |

## Usage

```jsx
import SectionLabel from '@bbc/psammead-section-label';
import { latin } from '@bbc/gel-foundations/scripts';

const WrappingComponent = () => (
  <div aria-labelledby="example-section-label">
    <SectionLabel script={latin} dir="ltr" labelId="example-section-label">
      Example section
    </SectionLabel>
  </div>
);
```

Or, without a horizontal bar:

```jsx
import SectionLabel from '@bbc/psammead-section-label';
import { latin } from '@bbc/gel-foundations/scripts';

const WrappingComponent = () => (
  <div aria-labelledby="example-section-label">
    <SectionLabel
      script={latin}
      dir="ltr"
      bar={false}
      labelId="example-section-label"
    >
      Example section
    </SectionLabel>
  </div>
);
```

You can also visually hide the SectionLabel at widths below 600px by adding the `visuallyHidden` prop:

```jsx
import SectionLabel from '@bbc/psammead-section-label';
import { latin } from '@bbc/gel-foundations/scripts';

const WrappingComponent = () => (
  <div aria-labelledby="example-section-label">
    <SectionLabel script={latin} dir="ltr" visuallyHidden={true} labelId="example-section-label">
      Example section
    </SectionLabel>
  </div>
);
```

### When to use this component

This component should be used to signal the beginning of a grouping of story promos. It should not wrap the story promos or contain any content other than that section's title (aka 'strapline').

<!-- ### When not to use this component -->

### Accessibility notes

Although this component has the appearance of a horizontal rule, it does not use an `<hr>` tag, and therefore does not have the associated semantic meaning.

This component wraps the title string in an `<h2>` element. The `labelId` prop will be applied to the `<h2>` as an `id` attribute, allowing the content of the element to be referenced by an `aria-labelledby` attribute. See the [examples](#usage) above.

Setting the `visuallyHidden` prop to true visually hides this component at widths <600px, however; it will still be available to screen-readers and other assistive technology.

<!-- ## Roadmap -->

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
