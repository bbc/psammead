# psammead-episode-list - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-episode-list%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-episode-list%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-episode-list)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-episode-list) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-episode-list)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-episode-list&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/figure--containing-image) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-episode-list.svg)](https://www.npmjs.com/package/@bbc/psammead-episode-list) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

Renders a list of episodes that conform to BBC's GEL Guidelines

This is an alpha component and currently not production ready

### Usage

```javascript
<EpisodeList>
  {episodes.map(episode => (
    <EpisodeList.Episode
      key={episode.id}
      script={script}
      service={service}
      dir={dir}
      LinkElement={({ children, className }) => (
        <a href={episode.url} className={className}>
          {children}
        </a>
      )}
    >
      <VisuallyHiddenText>Audio</VisuallyHiddenText>
      <EpisodeList.BrandTitle>{episode.brandTitle}</EpisodeList.BrandTitle>
      <EpisodeList.EpisodeTitle>
        {episode.episodeTitle || `${episode.date}, ${episode.time}`}
      </EpisodeList.EpisodeTitle>
      <EpisodeList.MetaData>
        {episode.duration}
        {episode.episodeTitle && <span aria-hidden> | {episode.date}</span>}
      </EpisodeList.MetaData>
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
