import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob, themes } from '@bbc/psammead-storybook-helpers';

import {
  renderEpisodes,
  renderVideoEpisodes,
  exampleEpisodes,
  rtlEpisodes,
  exampleVideoEpisodes,
  exampleRtlVideoEpisodes,
} from './fixtures';

storiesOf('Components/EpisodeList', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add('default', ({ script, service, dir }) =>
    renderEpisodes({
      episodes: dir === 'rtl' ? rtlEpisodes : exampleEpisodes,
      script,
      service,
      dir,
    }),
  )
  .add('with single episode', ({ script, service, dir }) =>
    renderEpisodes({
      episodes: dir === 'rtl' ? [rtlEpisodes[0]] : [exampleEpisodes[0]],
      script,
      service,
      dir,
    }),
  )
  .add('with no episodes', ({ script, service, dir }) =>
    renderEpisodes({ episodes: [], script, service, dir }),
  )
  .add('with video episodes', ({ script, service, dir }) =>
    renderVideoEpisodes({
      episodes: dir === 'rtl' ? exampleRtlVideoEpisodes : exampleVideoEpisodes,
      script,
      service,
      dir,
    }),
  )
  .add('with single video episode', ({ script, service, dir }) =>
    renderVideoEpisodes({
      episodes:
        dir === 'rtl'
          ? [exampleRtlVideoEpisodes[0]]
          : [exampleVideoEpisodes[0]],
      script,
      service,
      dir,
    }),
  )
  .add('with no video episodes', ({ script, service, dir }) =>
    renderVideoEpisodes({ episodes: [], script, service, dir }),
  )
  .add('with surrounding components', ({ script, service, dir }) => {
    return renderVideoEpisodes({
      episodes: dir === 'rtl' ? exampleRtlVideoEpisodes : exampleVideoEpisodes,
      script,
      service,
      dir,
      withSurroundingComponents: true,
    });
  })
  .add(
    'with surrounding components (dark)',
    ({ script, service, dir }) => {
      return renderVideoEpisodes({
        episodes:
          dir === 'rtl' ? exampleRtlVideoEpisodes : exampleVideoEpisodes,
        script,
        service,
        dir,
        withSurroundingComponents: true,
        darkMode: true,
      });
    },
    {
      options: {
        theme: themes.dark,
      },
    },
  );
