import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import InlineLink from '@bbc/psammead-inline-link';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';

import RecentEpisodes from '.';

storiesOf('Components/RecentEpisodes', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add('default', ({ script, service }) => {
  const episodes = [
    {
      id: '1',
      url: 'https://www.bbc.com',
      brandTitle: 'Magazine de la Culture',
      episodeTitle: '4 Avril 2020',
      duration: 'Duration 59:00',
    },
    {
      id: '2',
      url: 'https://www.bbc.com',
      brandTitle: 'Some other Brand',
      episodeTitle: '4 May 2020',
      duration: 'Duration 59:00',
    },
  ];
  return (
    <RecentEpisodes>
      {episodes.map(episode => (
        <RecentEpisodes.Episode
          Link={({ children }) => <a href={episode.url}>{children}</a>}
          script={script}
          service={service}
        >
          <RecentEpisodes.BrandTitle>
            {episode.brandTitle}
          </RecentEpisodes.BrandTitle>
          {episode.episodeTitle ? (
            <RecentEpisodes.EpisodeTitle>
              {episode.episodeTitle}
            </RecentEpisodes.EpisodeTitle>
          ) : (
            <RecentEpisodes.Date>{episode.date}</RecentEpisodes.Date>
          )}
          <RecentEpisodes.Duration>
            {episode.duration}
          </RecentEpisodes.Duration>
        </RecentEpisodes.Episode>
      ))}
    </RecentEpisodes>
  );
});
