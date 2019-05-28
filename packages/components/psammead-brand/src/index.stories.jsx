import React from 'react';
import { select, number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as svgs from '@bbc/psammead-assets/svgs';
import { dirDecorator } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import Brand from './index';

const inputs = () => {
  // capitalization is only for presentation purpose on the knob
  const options = Object.keys(svgs)
    .filter(key => key !== 'BBC_BLOCKS')
    .map(key => key.charAt(0).toUpperCase() + key.slice(1));

  const svgChoice = select('Service SVG', options, 'News').toLowerCase();
  const svgRatio = svgs[svgChoice].ratio;
  const svgMaxHeight = 24;
  const svgMinHeight = 16;
  const minWidthInput = number('minimum svg width', svgRatio * svgMinHeight);
  const maxWidthInput = number('maximum svg width', svgRatio * svgMaxHeight);
  const svgHeightInput = number('desired height svg', svgMaxHeight);

  return { svgChoice, svgHeightInput, minWidthInput, maxWidthInput };
};

storiesOf('Components|Brand', module)
  .addDecorator(withKnobs)
  .addDecorator(dirDecorator)
  .add(
    'without brand link',
    () => {
      const {
        svgHeightInput,
        minWidthInput,
        maxWidthInput,
        svgChoice,
      } = inputs();

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
  )
  .add(
    'with brand link',
    () => {
      const {
        svgHeightInput,
        minWidthInput,
        maxWidthInput,
        svgChoice,
      } = inputs();

      return (
        <Brand
          brandName="Default Brand Name"
          svgHeight={svgHeightInput}
          minWidth={minWidthInput}
          maxWidth={maxWidthInput}
          svg={svgs[svgChoice]}
          url="https://bbc.com/news"
        />
      );
    },
    { notes },
  );
