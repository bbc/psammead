import React from 'react';
import {
  select,
  number,
  text,
  withKnobs,
  boolean,
} from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as svgs from '@bbc/psammead-assets/svgs';
import { dirDecorator } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import Brand from './index';
import { images } from './images';

const inputs = () => {
  // capitalization is only for presentation purpose on the knob
  const svgOptions = Object.keys(svgs)
    .filter(key => key !== 'BBC_BLOCKS')
    .map(key => key.charAt(0).toUpperCase() + key.slice(1));

  const pngOptions = Object.keys(images);
  const svgChoice = select('Service SVG', svgOptions, 'News').toLowerCase();
  const usePNGFallback = boolean('Use SVG instead of PNG fallback image', true);
  const pngChoice = select(
    'Fallback service PNG',
    pngOptions,
    'Default',
  ).toLowerCase();
  const productInput = text('Product', 'BBC News');
  const serviceLocalisedNameInput = text('Localised service name', 'Yoruba');
  const svgRatio = svgs[svgChoice].ratio;
  const svgMaxHeight = 24;
  const svgMinHeight = 16;
  const minWidthInput = number('minimum svg width', svgRatio * svgMinHeight);
  const maxWidthInput = number('maximum svg width', svgRatio * svgMaxHeight);
  const svgHeightInput = number('desired height svg', svgMaxHeight);
  const borderBottom = boolean('Border Bottom', false);
  const borderTop = boolean('Border Top', false);

  return {
    usePNGFallback,
    pngChoice,
    productInput,
    serviceLocalisedNameInput,
    svgChoice,
    svgHeightInput,
    minWidthInput,
    maxWidthInput,
    borderTop,
    borderBottom,
  };
};

storiesOf('Components|Brand', module)
  .addDecorator(withKnobs)
  .addDecorator(dirDecorator)
  .add(
    'without brand link',
    () => {
      const {
        usePNGFallback,
        productInput,
        serviceLocalisedNameInput,
        svgHeightInput,
        minWidthInput,
        maxWidthInput,
        svgChoice,
        pngChoice,
        borderBottom,
        borderTop,
      } = inputs();

      return (
        <Brand
          product={productInput}
          serviceLocalisedName={serviceLocalisedNameInput}
          svgHeight={svgHeightInput}
          minWidth={minWidthInput}
          maxWidth={maxWidthInput}
          svg={svgs[svgChoice]}
          svgSupport={usePNGFallback}
          png={pngChoice}
          borderBottom={borderBottom}
          borderTop={borderTop}
        />
      );
    },
    { notes },
  )
  .add(
    'with brand link',
    () => {
      const {
        usePNGFallback,
        productInput,
        pngChoice,
        serviceLocalisedNameInput,
        svgHeightInput,
        minWidthInput,
        maxWidthInput,
        svgChoice,
        borderBottom,
        borderTop,
      } = inputs();

      return (
        <Brand
          product={productInput}
          serviceLocalisedName={serviceLocalisedNameInput}
          svgHeight={svgHeightInput}
          minWidth={minWidthInput}
          maxWidth={maxWidthInput}
          svg={svgs[svgChoice]}
          svgSupport={usePNGFallback}
          png={pngChoice}
          url="https://www.bbc.com/news"
          borderBottom={borderBottom}
          borderTop={borderTop}
        />
      );
    },
    { notes },
  );
