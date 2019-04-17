import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { latin } from '@bbc/gel-foundations/scripts';
import { C_POSTBOX } from '@bbc/psammead-styles/colours';
import { withKnobs, text } from '@storybook/addon-knobs';
import notes from '../README.md';
import MediaIndicator from './index';

// To ensure the white box in the media indicator is visible.
const Page = styled.div`
  background: ${C_POSTBOX};
  height: 100vh;
`;

const PageDecorator = storyFn => <Page>{storyFn()}</Page>;

storiesOf('MediaIndicator', module)
  .addDecorator(PageDecorator)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => (
      <MediaIndicator
        duration={text('duration', '2:15')}
        datetime={text('datetime', 'PT2M15S')}
        offscreenText={text('offscreenText', 'Video 2 minutes 15 seconds')}
        script={latin}
      />
    ),
    { notes },
  )
  .add('without duration', () => <MediaIndicator script={latin} />, { notes });
