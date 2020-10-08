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
        date: '4 Avril 2020',
        duration: 'Duration 59:00',
      },
      {
        id: '2',
        url: 'https://www.bbc.com',
        brandTitle: 'Some other Brand',
        episodeTitle: 'Brandy Brand Talks About Hedgehogs',
        date: '4 Avril 2020',
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
            <EpisodeList.EpisodeTitle>
              {episode.episodeTitle ? episode.episodeTitle : episode.date}
            </EpisodeList.EpisodeTitle>
            <EpisodeList.MetaData>{episode.duration}</EpisodeList.MetaData>
          </EpisodeList.Episode>
        ))}
      </EpisodeList>
    );
  });
