import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import Readme from '../../README.md';
import { custom, landscape, portrait, square } from './fixtureData';

function getProps(image, includeHeight) {
  const props = {
    alt: image.alt,
    src: image.src,
    width: image.width,
  };
  props.height = includeHeight ? image.height : null;

  return props;
}

const stories = (
  styleDecorator,
  Component,
  title,
  includeHeight = false,
  additionalProps = {},
) =>
  storiesOf(title, module)
    .addDecorator(withReadme(Readme))
    .addDecorator(styleDecorator)
    .add('16:9 landscape image', () => (
      <Component {...getProps(landscape, includeHeight)} {...additionalProps} />
    ))
    .add('9:16 portrait image', () => (
      <Component {...getProps(portrait, includeHeight)} {...additionalProps} />
    ))
    .add('1:1 square image', () => (
      <Component {...getProps(square, includeHeight)} {...additionalProps} />
    ))
    .add('custom ratio image', () => (
      <Component {...getProps(custom, includeHeight)} {...additionalProps} />
    ))
    .add('image with srcset', () => (
      <Component
        {...getProps(landscape, includeHeight)}
        srcset={landscape.srcset}
        {...additionalProps}
      />
    ));

export default stories;
