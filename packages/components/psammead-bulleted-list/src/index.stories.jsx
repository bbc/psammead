import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import BulletedList from './index';

storiesOf('Components|BulletedList', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ text, script, service, dir }) => (
      <BulletedList dir={dir} script={script} service={service}>
        <li>{text}</li>
        <li>
          {text} {text}
        </li>
        <li>{text.substring(0, 10)}</li>
        <li>
          {text} {text} {text} {text}
        </li>
      </BulletedList>
    ),
    { notes },
  );
