# ⛔️ This is an alpha component ⛔️

This component is currently tagged as alpha and is not suitable for production use. Following the passing of an accessibility review this component will be marked as ready for production and the alpha tag removed.

# psammead-navigation - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-navigation%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-navigation%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-navigation)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-navigation) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-navigation)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-navigation&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/section-label--default) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-navigation.svg)](https://www.npmjs.com/package/@bbc/psammead-navigation) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `@bbc/psammead-navigation` package is a set of two components, `NavigationUl` and `NavigationLi`. They use `ul` and `li` HTML elements respectively. The package also includes a Hamburger Menu and a Dropdown Navigation which are visible for breakpoints under 600px.

## Exports

`/dropdown` - Adds a dropdown navigation with hamburger menu which is visible for breakpoints under 600px
`/scrollable` - Makes the navigation to be scrollable under 600px.

## Installation

`npm install @bbc/psammead-navigation`

## Props

### Navigation

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| children | node | Yes | N/A | `<ScrollableNavigation dir={dir}><NavigationUl><NavigationLi url="/" script={latin} active="true">Home</NavigationLi><NavigationLi url="/sport" script={latin}>{Sport}</NavigationLi></NavigationUl><ScrollableNavigation/>` |
| dir | string | No | `'ltr'` | `'rtl'` |
| isOpen | boolean | No | `false` | `true` |
| ampOpenClass | string | No | `null` | `'open'` |

### NavigationUl

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| children | node | Yes      | N/A     | `<NavigationLi url="/" script={latin} active="true">Home</NavigationLi><NavigationLi url="/sport" script={latin}>{Sport}</NavigationLi>` |
| isScrollable | boolean | No | `false` | `true` |

### NavigationLi

<!-- prettier-ignore -->
| Argument | Type    | Required | Default | Example  |
| -------- | ------- | -------- | ------- | -------- |
| url      | string  | Yes      | N/A     | `/sport` |
| script   | object  | Yes      | N/A     |  `{ canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }` |
| active   | boolean | No       | `false` | `true`   |
| currentPageText | string | No | `null`  | `Current page` |
| service | string | Yes | N/A | `'news'` |
| dir      | string  | No       | `'ltr'`   | `'rtl'` |
| isScrollable | boolean | No | `false` | `true` |

### CanonicalScrollableNavigation

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| children | node | Yes      | N/A     | `<NavigationUl><NavigationLi url="/" script={latin} active="true">Home</NavigationLi><NavigationLi url="/sport" script={latin}>{Sport}</NavigationLi></NavigationUl>` |
| dir      | string  | No       | `'ltr'`   | `'rtl'` |
| isScrollable | boolean | No | `false` | `true` |

### AmpScrollableNavigation

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| children | node | Yes      | N/A     | `<NavigationUl><NavigationLi url="/" script={latin} active="true">Home</NavigationLi><NavigationLi url="/sport" script={latin}>{Sport}</NavigationLi></NavigationUl>` |
| dir      | string  | No       | `'ltr'`   | `'rtl'` |
| id      | string  | No       | `null`   | `'scrollable-nav'` |

### Dropdown

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| children | node | Yes | N/A | `<DropdownUl><DropdownLi script={latin} service='news' key='sport' url='/sport' active="false"> Sport </DropdownLi></DropdownUl>` |

### DropdownLi

<!-- prettier-ignore -->
| Argument | Type    | Required | Default | Example  |
| -------- | ------- | -------- | ------- | -------- |
| children | string | Yes | N/A | `'Sport'` |
| url | string | Yes | N/A | `/sport` |
| script | object | Yes | N/A | `{ canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }` |
| service | string | Yes | N/A | `'news'` |
| active | boolean | No | `false` | `true` |
| currentPageText | string | No | `null` | `Current page` |
| dir | string | No | `ltr` | `rtl` |

### CanonicalMenuButton

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| announcedText | string | Yes | N/A | `'Menu'` |
| onClick | function | Yes | N/A | `() => { console.log("Handle onClick action"); }` |
| isOpen | bool | Yes | N/A | `false` |
| dir | string | no | `'ltr'` | `'rtl'` |
| script   | object  | Yes      | N/A     |  `{ canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }` |

### AmpMenuButton

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| announcedText | string | Yes | N/A | `'Menu'` |
| onToggle | string | Yes | N/A | `"menu.toggleVisibility"` - must be an action on a valid AMP target|
| dir | string | no | `'ltr'` | `'rtl'` |
| script   | object  | Yes      | N/A     |  `{ canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }` |

## Navigation Usage

```jsx
import React from 'react';
import { CanonicalScrollableNavigation } from '@bbc/psammead-navigation/scrollable';
import Navigation, {
  NavigationUl,
  NavigationLi,
} from '@bbc/psammead-navigation';
import { latin } from '@bbc/gel-foundations/scripts';

<Navigation>
  <CanonicalScrollableNavigation>
    <NavigationUl>
      <NavigationLi
        url="/"
        script={latin}
        active
        currentPageText="Current Page"
        service="news"
      >
        Home
      </NavigationLi>
      <NavigationLi url="/sport" script={latin} service="news">
        {Sport}
      </NavigationLi>
      <NavigationLi url="/weather" script={latin} service="news">
        {Weather}
      </NavigationLi>
    </NavigationUl>
  </CanonicalScrollableNavigation>
</Navigation>;
```

## Dropdown Navigation Usage

```jsx
import React from 'react';
import {
  Dropdown,
  DropdownUl,
  DropdownLi,
} from '@bbc/psammead-navigation/dropdown';
import { latin } from '@bbc/gel-foundations/scripts';

<Dropdown>
  <DropdownUl>
    <DropdownLi
      script={latin}
      service="news"
      key="Home"
      url="/"
      active
      currentPageText="Current page"
    >
      Home
    </DropdownLi>
    <DropdownLi script={latin} service="news" key="Sport" url="/sport">
      Sport
    </DropdownLi>
  </DropdownUl>
</Dropdown>
```

## Canonical Menu Button Usage

```jsx
import React from 'react';
import { CanonicalMenuButton } from '@bbc/psammead-navigation/dropdown';
import { latin } from '@bbc/gel-foundations/scripts';

<CanonicalMenuButton
  announcedText="Menu"
  isOpen
  dir={dir}
  onClick={() => {
    console.log('Handle onClick action');
  }}
  script={latin}
/>
```

## Amp Menu Button Usage

```jsx
import React from 'react';
import { AmpMenuButton } from '@bbc/psammead-navigation/dropdown';
import { latin } from '@bbc/gel-foundations/scripts';

<AmpMenuButton
  announcedText="Menu"
  onToggle="menu.toggleVisibility"
  script={latin}
  dir={dir}
/>
```
Note that in order for the `AmpMenuButton` toggling to work correctly, an `id` should be added to the `Navigation` component in Psammead. This `id` can be passed in as a prop to the component.

### When to use this component

The `Navigation` is designed to show a navigation bar on all pages, which will show all sections on a site. If there are too many items to fit on one line, the items will wrap to the next lines.

On the other hand, with `CanonicalScrollableNavigation` or `AmpScrollableNavigation` we can make the list to remain on one line and to be horizontally scrollable to allow access to further links, under 600px.

### Accessibility notes

The Navigation has a [`navigation` landmark](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/navigation.html) to provide a way to identify links that are intended to be used for navigation.

We have added the role `list` and `listitem` to the `NavigationUl` and `NavigationList` respectively, due to a VoiceOver bug to reinstate the list semantics.

We have also added visually hidden text to let the user know which item in both regular and dropdown Navigation is the current page. Note the use of visually hidden text here is due to lack of support at this time for the aria-current page attribute. Also note the use of `role="text"` to stop text splitting in VoiceOver.

We have added an `aria-expanded` attribute to the menu button to indicate whether the menu is collapsed or expanded.

In the screen reader UX only the menu button and its content should be available to assistive technology, meaning the scrollable navigation will be hidden. To achieve this we add `aria-hidden:true` to the exposed scrollable navigation so that this is not visible to these users and also add `tabindex=-1` to the links contained within this to remove them from the tab order.

On the other hand, when Javascript is disabled, the window object will not be defined and the `useMediaQuery` will return null so `isScrollable` will be null too, therefore the scrollable navigation will be fully available to keyboard users via the tab key and to screen reader users.

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
