# psammead-episode-list - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-episode-list%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-episode-list%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-episode-list)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-episode-list) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-episode-list)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-episode-list&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/figure--containing-image) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-episode-list.svg)](https://www.npmjs.com/package/@bbc/psammead-episode-list) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

Renders a list of episodes that conform to BBC's GEL Guidelines

This is an alpha component and currently not production ready

## Basic Usage

```jsx
<EpisodeList script={script} service={service} dir={dir}>
  <EpisodeList.Link href={episode.url}>
    <EpisodeList.Episode>
      <EpisodeList.Title>{episode.title}</EpisodeList.Title>
      <EpisodeList.Description>{episode.description}</EpisodeList.Description>
      <EpisodeList.DateTimeDuration>
        {episode.duration}
      </EpisodeList.DateTimeDuration>
    </EpisodeList.Episode>
  </EpisodeList.Link>
</EpisodeList>
```

### Components: `EpisodeList`

The base `EpisodeList` component is responsible for mangaging the internal spacing of its children, and the rendering of dividers. Its children are intended to be one or more `EpisodeList.Link` or `EpisodeList.Episode` components.

`EpisodeList` accepts the standard Psammead `script`, `service` and `dir` properties to implement localised styling.

`EpisodeList` also accepts a boolean `darkMode` prop. When set to true, child components will implement dark-mode styling.

### Components: `EpisodeList.Link`

The `EpisodeList.Link` component is responsible for the click, focus and hover handling of individual episodes. It's child is intended to be an `EpisodeList.Episode` component. By default, it is a styled `<a>` element, however, this can be overridden by the `as` prop, which would be useful for things like client side routing.

Child elements with a class name containing `--visited` will receive `::visited` styling, which currently will change the `color` to one with reduced contrast.

```jsx
<EpisodeList.Link as={Link} to={episode.url}>
```

### Components: `EpisodeList.Episode`

The `EpisodeList.Episode` component is responsible for rendering the play icon, and a collection of child elements that describe the episode.

Child elements with a class name containing `--hover` will receive `::hover` styling, which currently will apply a `text-decoration` of `underline`.

### Components: `EpisodeList.Image`

The `EpisodeList.Image` component displays an image to the left (in LTR locales) or right (in RTL locales) of the episode card.

If provided, the `EpisodeList.Image` must be the first child of the `EpisodeList.Episode` component

`EpisodeList.Image` accepts a `duration` prop which, if provided, will be placed on the bottom of the image. Any additional props this component receives will be passed through to the underlying `<img>` element. At bare minimum, a `src` or `srcset` should be provided. `alt` is set to an empty string if not provided

If an episode does not have an `EpisodeList.Image` child component, the episode card will use a play icon instead. Note: this fallback play icon does not currently support `darkMode` styling. If using `darkMode`, it is recommended that each episode has a `EpisodeList.Image` child.

### Components: `EpisodeList.Title`

The `EpisodeList.Title` component is responsible for styling text to be presented as the title of an individual episode. This component is intended to be a child of `EpisodeList.Episode`

### Components: `EpisodeList.Description`

The `EpisodeList.Description` component is responsible for styling text to be presented the description of an individual episode. This component is intended to be a child of `EpisodeList.Episode`

### Components: `EpisodeList.DateTimeDuration`

The `EpisodeList.DateTimeDuration` component is responsible for styling text to be presented as supplemental dateTime or duration metadata for an individual episode. This component is intended to be a child of `EpisodeList.Episode`.

`EpisodeList.DateTimeDuration` accepts a `hasBorder` boolean prop which if provided will add a leftBorder to the metadata span. This allows for a visual separation of duration and date. The component also accepts a `dir` prop, which is used to style the border.

## Advanced Usage

The following example shows a more advanced usage of this package. This is how we use this in Simorgh to implement product-specific behaviour.

Note. The `<InlineDiv>` component is added here to wrap the last `<DateTimeDuration>` so that if a user has css is disabled, this piece of information breaks onto another line.

```jsx
<EpisodeList script={script} service={service} dir={dir}>
  {episodes.map(episode => (
    <EpisodeList.Episode>
      <EpisodeList.Link as={Link} to={episode.url} key={episode.id}>
        <VisuallyHiddenText>{translations.audio}</VisuallyHiddenText>
        <EpisodeList.Title>{episode.brandTitle}</EpisodeList.Title>
        <EpisodeList.Description>
          {episode.episodeTitle || `${episode.date}, ${episode.time}`}
        </EpisodeList.Description>
        <EpisodeList.DateTimeDuration>
          {episode.duration}
        </EpisodeList.DateTimeDuration>
      </EpisodeList.Link>
      <InlineDiv>
        <EpisodeList.DateTimeDuration hasBorder dir={dir}>
          {episode.episodeTitle && episode.date}
        </EpisodeList.DateTimeDuration>
      </InlineDiv>
    </EpisodeList.Episode>
  ))}
</EpisodeList>
```

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead repository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
