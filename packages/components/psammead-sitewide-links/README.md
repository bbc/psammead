# psammead-sitewide-links &middot; [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badges/storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?selectedKind=SitewideLinks) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-sitewide-links.svg)](https://www.npmjs.com/package/@bbc/psammead-sitewide-links) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

## Description

The `psammead-sitewide-links` component is intended to be used at the bottom of an article, serving as a footer, however can be used anywhere on a page. These links are generally intended to be to more general and legal BBC pages, but do not have to be. It also includes information about copyright.

## Installation

```
npm install @bbc/psammead-sitewide-links --save
```

## Props

| Argument      | Type                  | Required | Default | Example                                           |
| ------------- | --------------------- | -------- | ------- | ------------------------------------------------- |
| links         | Array of Link objects | Yes      | N/A     | `[{href:'https://www.bbc.com', text: 'The BBC'}]` |
| copyrightText | String                | Yes      | N/A     | `'Copyright BBC News'`                            |
| externalLink  | Link object           | Yes      | N/A     | `{href:'https://www.bbc.com', text: 'The BBC'}`   |

## Usage

```jsx
import SitewideLinks from '@bbc/psammead-sitewide-links';

const props = {
  links: [
    { href: 'https://www.bbc.co.uk/news', text: 'BBC News' },
    { href: 'https://www.bbc.co.uk/sport', text: 'BBC Sport' },
  ],
  copyrightText: 'Copyright BBC News',
  externalLink: { href: 'https://www.bbc.com', text: 'The BBC' },
};

const WrappingComponent = () => <SitewideLinks {...props} />;
```

The typical use-case of this component is at the bottom of BBC pages in a [`footer` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer). When this is done it is recommend that the component is wrapped in a [`contentinfo` landmark](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/contentinfo.html) which denotes content around copyright, privacy and related content.

_Example -_

```jsx
<footer role="contentinfo">
  <SitewideLinks />
</footer>
```

### When to use this component

It is currently used at the bottom of new BBC News and BBC News Persian article pages, however it has no markup requiring this to be its only application. It can be used anywhere on any page.

<!-- ### When not to use this component -->

<!-- ### Accessibility notes -->

<!-- ## Roadmap -->

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
