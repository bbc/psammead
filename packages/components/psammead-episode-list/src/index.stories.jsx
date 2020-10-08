import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';

import { renderEpisodes, exampleEpisodes, rtlEpisodes } from './fixtures';

storiesOf('Components/EpisodeList', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob({ defaultService: 'news' }))
  .add('default', ({ script, service, dir }) =>
    renderEpisodes(
      dir === 'rtl' ? rtlEpisodes : exampleEpisodes,
      script,
      service,
      dir,
    ),
  )
  .add('with single episode', ({ script, service, dir }) =>
    renderEpisodes([exampleEpisodes[0]], script, service, dir),
  )
  .add('with no episodes', ({ script, service, dir }) =>
    renderEpisodes([], script, service, dir),
  );
