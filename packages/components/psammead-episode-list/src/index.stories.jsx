import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';

import EpisodeList from '.';

storiesOf('Components/EpisodeList', module)
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
      <EpisodeList>
        {episodes.map(episode => (
          <EpisodeList.Episode
            Link={({ children }) => <a href={episode.url}>{children}</a>}
            script={script}
            service={service}
          >
            <EpisodeList.BrandTitle>
              {episode.brandTitle}
            </EpisodeList.BrandTitle>
            {episode.episodeTitle ? (
              <EpisodeList.EpisodeTitle>
                {episode.episodeTitle}
              </EpisodeList.EpisodeTitle>
            ) : (
              <EpisodeList.Date>{episode.date}</EpisodeList.Date>
            )}
            <EpisodeList.Duration>{episode.duration}</EpisodeList.Duration>
          </EpisodeList.Episode>
        ))}
      </EpisodeList>
    );
  });
