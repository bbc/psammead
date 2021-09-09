import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';

import BasicExample from './examples/basic';
import OnPageExample from './examples/on-page';

storiesOf('Components/PodcastPromo', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob({ defaultService: 'russian' }))
  .add('default', props => <BasicExample {...props} />)
  .add('on page', props => <OnPageExample {...props} />);
