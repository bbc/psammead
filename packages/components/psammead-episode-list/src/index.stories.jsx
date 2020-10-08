import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';

import EpisodeList from '.';

const episodes = [
  {
    id: '1',
    url: 'https://www.bbc.com',
    brandTitle: 'Magazine de la Culture',
    date: '4 Avril 2020',
    duration: 'Duration 59:00',
    time: '14:00'
  },
  {
    id: '2',
    url: 'https://www.bbc.com',
    brandTitle: 'Some other Brand',
    episodeTitle: 'Brandy Brand Talks About Hedgehogs',
    date: '4 Avril 2020',
    duration: 'Duration 59:00',
    time: '14:00'
  },
  {
    id: '2',
    url: 'https://www.bbc.com/blah',
    brandTitle: 'Some other Brand 2',
    episodeTitle: 'Brandy Brand Talks About Badgers',
    date: '4 Avril 2020',
    duration: 'Duration 59:00',
    time: '14:00'
  },
];

const rtlEpisode = {
  brandTitle: 'یونیورسٹی کی اندھیری',
  date: 'بی بی سی اردو ڈاٹ کام، کرا',
  duration: 'ایک گھنٹہ قبل',
  date: 'ریاض سہیل',
  time: 'ریشان'
}

const rtlEpisodes = [
  {
    id: '1',
    url: 'https://www.bbc.com',
    ...rtlEpisode,
  }, {
    id: '2',
    url: 'https://www.bbc.com',
    ...rtlEpisode,
  }, {
    id: '3',
    url: 'https://www.bbc.com/blah',
    ...rtlEpisode,
  }
]

const StyledA = styled.a`
  display: block;
`;

const renderEpisodes = (episodes, script, service, dir) => (
  <EpisodeList script={script} service={service} dir={dir}>
    {episodes.map(episode => (
      <EpisodeList.Episode
        Link={({ children }) => <StyledA href={episode.url}>{children}</StyledA>}
      >
        <EpisodeList.BrandTitle>
          {episode.brandTitle}
        </EpisodeList.BrandTitle>
        <EpisodeList.EpisodeTitle>
          {episode.episodeTitle ? episode.episodeTitle : `${episode.date}, ${episode.time}`}
        </EpisodeList.EpisodeTitle>
        <EpisodeList.MetaData>{episode.duration} {episode.episodeTitle && ` | ${episode.date}`}</EpisodeList.MetaData>
      </EpisodeList.Episode>
    ))}
  </EpisodeList>
);

storiesOf('Components/EpisodeList', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add('default', ({ script, service, dir }) => renderEpisodes(episodes, script, service, dir))
  .add('rtl', ({ script, service, dir }) => renderEpisodes(rtlEpisodes, script, service, dir))
  .add('with single episode', props => renderEpisodes([episodes[0]], script, service, dir))
  .add('with no episodes', props => renderEpisodes([], script, service, dir))