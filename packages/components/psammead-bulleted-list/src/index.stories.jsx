import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import { BulletedList, BulletedListItem } from './index';

storiesOf('Components|BulletedList', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ text, script, service, dir }) => (
      <BulletedList script={script} service={service}>
        <BulletedListItem dir={dir}>{text}</BulletedListItem>
        <BulletedListItem dir={dir}>
          {text} {text}
        </BulletedListItem>
        <BulletedListItem dir={dir}>{text.substring(0, 10)}</BulletedListItem>
        <BulletedListItem dir={dir}>
          {text} {text} {text} {text}
        </BulletedListItem>
      </BulletedList>
    ),
    { notes },
  );
