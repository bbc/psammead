import React from 'react';
import { select, number, withKnobs } from '@storybook/addon-knobs';
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
      const heights = {
        groupA: number('svg height min', 16),
        groupB: number('svg height med', 20),
        groupD: number('svg height max', 24),
      };
      return (
        <Brand
          brandName="Default Brand Name"
          svg={svgs[choice]}
          svgHeights={heights}
        />
      );
    },
    { notes },
  )
  .add('without brand svg', () => <Brand brandName="Default Brand Name" />, {
    notes,
  });
