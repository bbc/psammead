# psammead-episode-list - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-episode-list%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-episode-list%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-episode-list)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-episode-list) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-episode-list)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-episode-list&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/figure--containing-image) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-episode-list.svg)](https://www.npmjs.com/package/@bbc/psammead-episode-list) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

Renders a list of episodes that conform to BBC's GEL Guidelines

This is an alpha component and currently not production ready

## Basic Usage

```javascript
<EpisodeList>
  <EpisodeList.Episode script={script} service={service} dir={dir}>
    <EpisodeList.Title>{episode.title}</EpisodeList.Title>
    <EpisodeList.Description>{episode.description}</EpisodeList.Description>
    <EpisodeList.Metadata>{episode.duration}</EpisodeList.Metadata>
  </EpisodeList.Episode>
</EpisodeList>
```

### Components: `EpisodeList`

The base `EpisodeList` component is responsible for mangaging the internal spacing of its children, and the rendering of dividers. Its children are intended to be one or more `Episode` components.

### Components: `EpisodeList.Episode`

The `EpisodeList.Episode` component is responsible for the click, focus and hover handling of individual episodes. It also renders the play icon, and a collection of child elements that describe the episode.

`EpisodeList.Episode` accepts the standard Psammead `script`, `service` and `dir` properties to implement localised styling.

Additionally, a `LinkElement` render prop can be passed to this component, allowing for custom implementation of the link element (eg, for client side routing)

```javascript
<EpisodeList.Episode
  LinkElement={({ children }) => <Link to={episode.url}>{children}</Link>}
/>
```

### Components: `EpisodeList.Title`

The `EpisodeList.Title` component is responsible for styling text to be presented as the title of an individual episode. This component is intended to be a child of `EpisodeList.Episode`

### Components: `EpisodeList.Description`

The `EpisodeList.Description` component is responsible for styling text to be presented the description of an individual episode. This component is intended to be a child of `EpisodeList.Episode`

### Components: `EpisodeList.Metadata`

The `EpisodeList.Metadata` component is responsible for styling text to be presented as supplemental metadata for an individual episode. This component is intended to be a child of `EpisodeList.Episode`

## Advanced Usage

The following example shows a more advanced usage of this package. This is how we use this in Simorgh to implement product-specific behaviour

```javascript
<EpisodeList script={script} service={service} dir={dir}>
  {episodes.map(episode => (
    <EpisodeList.Episode
      key={episode.id}
      script={script}
      service={service}
      dir={dir}
      LinkElement={({ children }) => <Link to={episode.url}>{children}</Link>}
    >
      <VisuallyHiddenText>{translations.audio}</VisuallyHiddenText>
      <EpisodeList.Title>{episode.brandTitle}</EpisodeList.Title>
      <EpisodeList.Description>
        {episode.episodeTitle || `${episode.date}, ${episode.time}`}
      </EpisodeList.Description>
      <EpisodeList.Metadata>
        {episode.duration}
        {episode.episodeTitle && <span aria-hidden> | {episode.date}</span>}
      </EpisodeList.Metadata>
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
