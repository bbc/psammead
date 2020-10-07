import React from 'react';
import { storiesOf } from '@storybook/react';

import RecentEpisodes from '.';

storiesOf('Components/RecentEpisodes', module).add('default', () => {
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
        <a href={episode.url} key={episode.id}>
          <RecentEpisodes.Episode
            Link={({ children }) => <a href={episode.url}>{children}</a>}
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
        </a>
      ))}
    </RecentEpisodes>
  );
});
