import React from 'react';
import {
  color,
  select,
  number,
  text,
  withKnobs,
  boolean,
} from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as svgs from '@bbc/psammead-assets/svgs';
import { C_POSTBOX, C_WHITE } from '@bbc/psammead-styles/colours';
import notes from '../README.md';
import Brand from './index';
import withServicesKnob from '../../../utilities/psammead-storybook-helpers/src/withServicesKnob';

const inputs = () => {
  // capitalization is only for presentation purpose on the knob
  const options = Object.keys(svgs)
    .filter(key => key !== 'BBC_BLOCKS')
    .map(key => key.charAt(0).toUpperCase() + key.slice(1));

  const svgChoice = select('Service SVG', options, 'News').toLowerCase();
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
  const backgroundColour = color('Background colour', `${C_POSTBOX}`);
  const logoColour = color('Logo colour', `${C_WHITE}`);

  return {
    productInput,
    serviceLocalisedNameInput,
    svgChoice,
    svgHeightInput,
    minWidthInput,
    maxWidthInput,
    borderTop,
    borderBottom,
    backgroundColour,
    logoColour,
  };
};

storiesOf('Components|Brand', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
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
        borderBottom,
        borderTop,
        backgroundColour,
        logoColour,
      } = inputs();

      return (
        <Brand
          product={productInput}
          serviceLocalisedName={serviceLocalisedNameInput}
          svgHeight={svgHeightInput}
          minWidth={minWidthInput}
          maxWidth={maxWidthInput}
          svg={svgs[svgChoice]}
          borderBottom={borderBottom}
          borderTop={borderTop}
          backgroundColour={backgroundColour}
          logoColour={logoColour}
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
        borderBottom,
        borderTop,
        backgroundColour,
        logoColour,
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
          borderBottom={borderBottom}
          borderTop={borderTop}
          backgroundColour={backgroundColour}
          logoColour={logoColour}
        />
      );
    },
    { notes },
  );
