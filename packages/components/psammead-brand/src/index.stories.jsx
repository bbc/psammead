import React from 'react';
import { select, number, text, withKnobs } from '@storybook/addon-knobs';
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
  const productInput = text('Product', 'Default Brand Name');
  const serviceLocalisedNameInput = text('Localised service name', 'News');
  const svgRatio = svgs[svgChoice].ratio;
  const svgMaxHeight = 24;
  const svgMinHeight = 16;
  const minWidthInput = number('minimum svg width', svgRatio * svgMinHeight);
  const maxWidthInput = number('maximum svg width', svgRatio * svgMaxHeight);
  const svgHeightInput = number('desired height svg', svgMaxHeight);

  return {
    productInput,
    serviceLocalisedNameInput,
    svgChoice,
    svgHeightInput,
    minWidthInput,
    maxWidthInput,
  };
};

storiesOf('Components|Brand', module)
  .addDecorator(withKnobs)
  .addDecorator(dirDecorator)
  .add(
    'without brand link',
    () => {
      const {
        productInput,
        serviceLocalisedNameInput,
        svgHeightInput,
        minWidthInput,
        maxWidthInput,
        svgChoice,
      } = inputs();

      return (
        <Brand
          product={productInput}
          serviceLocalisedName={serviceLocalisedNameInput}
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
        productInput,
        serviceLocalisedNameInput,
        svgHeightInput,
        minWidthInput,
        maxWidthInput,
        svgChoice,
      } = inputs();

      return (
        <Brand
          product={productInput}
          serviceLocalisedName={serviceLocalisedNameInput}
          svgHeight={svgHeightInput}
          minWidth={minWidthInput}
          maxWidth={maxWidthInput}
          svg={svgs[svgChoice]}
          url="https://www.bbc.com/news"
        />
      );
    },
    { notes },
  );
