import React from 'react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as svgs from '@bbc/psammead-assets/svgs';
import notes from '../README.md';
import Brand from './index';

storiesOf('Brand', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => {
      // capitalization is only for presentation purpose on the knob
      const options = Object.keys(svgs)
        .filter(key => key !== 'BBC_BLOCKS')
        .map(key => key.charAt(0).toUpperCase() + key.slice(1));

      const choice = select('Service SVG', options, 'news').toLowerCase();
      return <Brand brandName="Default Brand Name" svg={svgs[choice]} />;
    },
    { notes },
  )
  .add('without brand svg', () => <Brand brandName="Default Brand Name" />, {
    notes,
  });
