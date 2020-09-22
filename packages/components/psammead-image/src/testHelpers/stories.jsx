import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { custom, landscape, portrait, square } from './fixtureData';

export function getProps(image, includeHeight, type) {
  const props = {
    alt: image.alt,
    sizes: image.sizes,
    src: image.src,
    srcset: image.srcset,
    width: image.width,
    fade: type === 'Img' ? boolean('Fade', false) : null,
  };
  props.height = includeHeight ? image.height : null;

  return props;
}

export const stories = (
  Component,
  title,
  includeHeight = false,
  additionalProps = {},
  styleDecorator = storyFn => storyFn(),
  type,
) =>
  storiesOf(title, module)
    .addDecorator(styleDecorator)
    .add('landscape image', () => (
      <Component
        {...getProps(landscape, includeHeight, type)}
        {...additionalProps}
      />
    ))
    .add('portrait image', () => (
      <Component
        {...getProps(portrait, includeHeight, type)}
        {...additionalProps}
      />
    ))
    .add('square image', () => (
      <Component
        {...getProps(square, includeHeight, type)}
        {...additionalProps}
      />
    ))
    .add('custom ratio image', () => (
      <Component
        {...getProps(custom, includeHeight, type)}
        {...additionalProps}
      />
    ))
    .add('image with srcset', () => (
      <Component
        {...getProps(landscape, includeHeight, type)}
        srcset={landscape.srcset}
        {...additionalProps}
      />
    ));
