import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import notes from '../../README.md';
import { custom, landscape, portrait, square } from './fixtureData';

export function getProps(image, includeHeight, type) {
  const props = {
    alt: image.alt,
    src: image.src,
    srcset: image.srcset,
    width: image.width,
    fade: type === 'Img' ? boolean('load with fade?', false) : null,
  };
  props.height = includeHeight ? image.height : null;

  return props;
}

const stories = (
  Component,
  title,
  includeHeight = false,
  additionalProps = {},
  styleDecorator = storyFn => storyFn(),
  type,
) =>
  storiesOf(title, module)
    .addDecorator(styleDecorator)
    .add(
      'landscape image',
      () => (
        <Component
          {...getProps(landscape, includeHeight, type)}
          {...additionalProps}
        />
      ),
      { notes },
    )
    .add(
      'portrait image',
      () => (
        <Component
          {...getProps(portrait, includeHeight, type)}
          {...additionalProps}
        />
      ),
      { notes },
    )
    .add(
      'square image',
      () => (
        <Component
          {...getProps(square, includeHeight, type)}
          {...additionalProps}
        />
      ),
      { notes },
    )
    .add(
      'custom ratio image',
      () => (
        <Component
          {...getProps(custom, includeHeight, type)}
          {...additionalProps}
        />
      ),
      { notes },
    )
    .add(
      'image with srcset',
      () => (
        <Component
          {...getProps(landscape, includeHeight, type)}
          srcset={landscape.srcset}
          {...additionalProps}
        />
      ),
      { notes },
    );

export default stories;
