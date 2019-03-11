import React from 'react';
import { storiesOf } from '@storybook/react';
import Readme from '../../README.md';
import { custom, landscape, portrait, square } from './fixtureData';

function getProps(image, includeHeight) {
  const props = {
    alt: image.alt,
    src: image.src,
    srcset: image.srcset,
    width: image.width,
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
) =>
  storiesOf(title, module)
    .addDecorator(styleDecorator)
    .add(
      'landscape image',
      () => (
        <Component
          {...getProps(landscape, includeHeight)}
          {...additionalProps}
        />
      ),
      { notes },
    )
    .add(
      'portrait image',
      () => (
        <Component
          {...getProps(portrait, includeHeight)}
          {...additionalProps}
        />
      ),
      { notes },
    )
    .add(
      'square image',
      () => (
        <Component {...getProps(square, includeHeight)} {...additionalProps} />
      ),
      { notes },
    )
    .add(
      'custom ratio image',
      () => (
        <Component {...getProps(custom, includeHeight)} {...additionalProps} />
      ),
      { notes },
    )
    .add(
      'image with srcset',
      () => (
        <Component
          {...getProps(landscape, includeHeight)}
          srcset={landscape.srcset}
          {...additionalProps}
        />
      ),
      { notes },
    );

export default stories;
