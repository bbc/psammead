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

      const svgChoice = select('Service SVG', options, 'News').toLowerCase();
      const svgRatio = svgs[svgChoice].ratio;
      const svgMaxHeight = 24;
      const svgMinHeight = 16;
      const minWidthInput = number(
        'minimum svg width',
        svgRatio * svgMinHeight,
      );
      const maxWidthInput = number(
        'maximum svg width',
        svgRatio * svgMaxHeight,
      );
      const svgHeightInput = number('desired height svg', svgMaxHeight);

      return (
        <Brand
          brandName="Default Brand Name"
          svgHeight={svgHeightInput}
          minWidth={minWidthInput}
          maxWidth={maxWidthInput}
          svg={svgs[svgChoice]}
        />
      );
    },
    { notes },
  );
