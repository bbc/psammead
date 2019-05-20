import React from 'react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as svgs from '@bbc/psammead-assets/svgs';
import { dirDecorator } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import Brand from './index';

storiesOf('Brand', module)
  .addDecorator(withKnobs)
  .addDecorator(dirDecorator)
  .add(
    'without brand link',
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
  .add('with brand link', () => (
    <Brand
      brandName="Default Brand Name"
      svg={svgs.news}
      url="https://bbc.com/news"
    />
  ));

storiesOf('Brand', module).add(
  'without brand svg',
  () => <Brand brandName="Default Brand Name" />,
  {
    notes,
  },
);
