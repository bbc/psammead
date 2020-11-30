# psammead-podcast-promo - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-podcast-promo%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-podcast-promo%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-podcast-promo)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-podcast-promo) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-podcast-promo)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-podcast-promo&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/figure--containing-image) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-podcast-promo.svg)](https://www.npmjs.com/package/@bbc/psammead-podcast-promo) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

This component is used to implement styling for podcast promos

## Usage

See usage examples of how this package can be used in `/src/examples`

### Components: `PodcastPromo`

This is the outermost component, responsible for providing the gray background surface that subcomponents are children of. This component requires the psammead `script` and `service` properties to implement locale-specific styling across all of its children.

Any additional props are passed down to the standard html `section` element that this component uses. You can elect to use a different component via the `as` prop, eg: `<PodcastPromo as="div">`

### Components: `PodcastPromo.Title`

This component is responsible for implementing the overall title for the podcast promo section. The title will be placed alongside a podcast icon. Any props to this component are passed along to the underlying html `h2` element. You can elect to use a different component via the `as` prop, eg: `<PodcastPromo.Title as="h1">`

### Components: `PodcastPromo.Card`

This component is a basic `div` that is styled to be used as the wrapper around any individual episode or series within the podcast promo section.

Child components can apply the `podcast-promo--hover` class, which will apply a `text-decoration: underline` property when the card is hovered

### Components: `PodcastPromo.Card.Link`

This component is a styled `a` that is intended to be the handler for clicks within each individual card. This component implements CSS that will cause it to overlay the entire card, meaning any click within the Card will navigate the user to the destination. Therefore, the placement of this component within the card is only relevant for scenarios where CSS is not being used

Any props are passed down to the standard html `a` element that this component uses. You can elect to use a different component via the `as` prop, eg: `<PodcastPromo.Card.Link as={Link} to="/">`

Child components can apply the `podcast-promo--visited` class, which will reduce the text colour contrast property when the link has been visited by the user
Child components can apply the `podcast-promo--focus` class, which will which will apply a `text-decoration: underline` property when the link is focused

### Components: `PodcastPromo.Card.Image`

This component is responsible for wrapping the image used within the promo cards. This is a basic styled `figure` that is anticipated to be provided with a child `img` component. This `img` can optionally be wrapped with other components to handle, eg, placeholders and lazy-loading - see the basic example in `/src/examples`.

### Components: `PodcastPromo.Card.Content`

This component is a basic `div` that is styled to be used as the wrapper around content displayed alongside the image.

### Components: `PodcastPromo.Card.Title`

This component is a basic `h3` that is intended to be used as the title within each individual podcast card.

Any props to this component are passed along to the underlying html `h3` element. You can elect to use a different component via the `as` prop, eg: `<PodcastPromo.Card.Title as="span">`

### Components: `PodcastPromo.Card.Description`

This component is a basic `p` that is styled to be used for the synopsis/description of each card.

### Components: `PodcastPromo.Card.CallToAction`

This component intended to be used as the "call to action" within each card. The child text is positioned alongside an icon. Any props passed to this component are forwarded to the `span` element that wraps the text. This component is `aria-hidden` to screen readers.

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead repository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
