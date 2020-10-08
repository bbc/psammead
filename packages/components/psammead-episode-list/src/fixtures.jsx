// This provides fixture data and helper functions that are useful to both storybook and unit tests
import React from 'react';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';

import EpisodeList from '.';

export const exampleEpisodes = [
  {
    id: '1',
    url: 'https://www.bbc.com',
    brandTitle: 'Magazine de la Culture',
    date: '4 Avril 2020',
    duration: 'Duration 59:00',
    time: '14:00',
  },
  {
    id: '2',
    url: 'https://www.bbc.com',
    brandTitle: 'Some other Brand',
    episodeTitle: 'Brandy Brand Talks About Hedgehogs',
    date: '4 Avril 2020',
    duration: 'Duration 59:00',
    time: '14:00',
  },
  {
    id: '3',
    url: 'https://www.bbc.com/blah',
    brandTitle: 'Some other Brand 2',
    episodeTitle: 'Brandy Brand Talks About Badgers',
    date: '4 Avril 2020',
    duration: 'Duration 59:00',
    time: '14:00',
  },
];

const rtlEpisode = {
  brandTitle: 'یونیورسٹی کی اندھیری',
  date: 'بی بی سی اردو ڈاٹ کام، کرا',
  duration: 'ایک گھنٹہ قبل',
  time: 'ریشان',
};

export const rtlEpisodes = [
  {
    id: '1',
    url: 'https://www.bbc.com',
    ...rtlEpisode,
  },
  {
    id: '2',
    url: 'https://www.bbc.com',
    ...rtlEpisode,
  },
  {
    id: '3',
    url: 'https://www.bbc.com/blah',
    ...rtlEpisode,
  },
];

export const renderEpisodes = (episodes, script, service, dir) => (
  <EpisodeList script={script} service={service} dir={dir}>
    {episodes.map(episode => (
      <EpisodeList.Episode
        key={episode.id}
        script={script}
        service={service}
        dir={dir}
        LinkElement={({ children }) => <a href={episode.url}>{children}</a>}
      >
        <VisuallyHiddenText>Audio</VisuallyHiddenText>
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
);
