# ⛔️ This is an alpha component ⛔️

This component is currently tagged as alpha and is not suitable for production use. Following the passing of an accessibility review this component will be marked as ready for production and the alpha tag removed.

# psammead-navigation - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-navigation%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-navigation%2Fpackage.json) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/section-label--default) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-navigation.svg)](https://www.npmjs.com/package/@bbc/psammead-navigation) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `@bbc/psammead-navigation` package is a set of two components, `NavigationUl` and `NavigationLi`. They use `ul` and `li` HTML elements respectively.

## Installation

`npm install @bbc/psammead-navigation`

## Props

### Navigation

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| children | node | Yes      | N/A     | `<NavigationUl><NavigationLi url="/" script={latin} active="true">Home</NavigationLi><NavigationLi url="/sport" script={latin}>{Sport}</NavigationLi></NavigationUl>` |
| script   | object  | Yes   | N/A     |  `{ canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }` |
| skipLinkText | string | Yes | N/A    | `Skip to content` |

### NavigationUl

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| children | node | Yes      | N/A     | `<NavigationLi url="/" script={latin} active="true">Home</NavigationLi><NavigationLi url="/sport" script={latin}>{Sport}</NavigationLi>` |

### NavigationLi

<!-- prettier-ignore -->
| Argument | Type    | Required | Default | Example  |
| -------- | ------- | -------- | ------- | -------- |
| url      | string  | Yes      | N/A     | `/sport` |
| script   | object  | Yes      | N/A     |  `{ canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }` |
| dir      | string  | No       | `ltr`   | `rtl`    |
| active   | boolean | No       | `false` | `true`   |
| currentPageText | string | No | `null`  | `Current page` |

## Usage

```jsx
import React from 'react';
import Navigation, {
  NavigationUl,
  NavigationLi,
} from '@bbc/psammead-navigation';
import { latin } from '@bbc/gel-foundations/scripts';

<Navigation skipLinkText="Skip to content">
  <NavigationUl>
    <NavigationLi
      url="/"
      script={latin}
      active="true"
      currentPageText="Current Page"
    >
      Home
    </NavigationLi>
    <NavigationLi url="/sport" script={latin}>
      {Sport}
    </NavigationLi>
    <NavigationLi url="/weather" script={latin}>
      {Weather}
    </NavigationLi>
  </NavigationUl>
</Navigation>;
```

### When to use this component

The `Navigation` is designed to show a navigation bar on `index` pages, which will show all sections on a site. If there are too many items to fit on one line, the items will wrap to the next lines.

### Accessibility notes

The Navigation has a [`navigation` landmark](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/navigation.html) to provide a way to identify links that are intended to be used for navigation.

It includes a ["skip link"](https://www.w3.org/TR/WCAG20-TECHS/G1.html) giving users the option to skip to the main content before the assistive technology reads the full content of the interjection.

We have added the role `list` and `listitem` to the `NavigationUl` and `NavigationList` respectively, due to a VoiceOver bug to reinstate the list semantics.

We have also added visually hidden text to let the user know which item in the Navigation is the current page. Note the use of visually hidden text here is due to lack of support at this time for the aria-current page attribute. Also note the use of `role="text"` to stop splitting in VoiceOver.

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
