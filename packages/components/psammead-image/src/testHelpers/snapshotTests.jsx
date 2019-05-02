import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { custom, landscape, portrait, square } from './fixtureData';

const snapshotTests = (Component, additionalProps) => {
  shouldMatchSnapshot(
    'should render landscape image correctly',
    <Component
      alt={landscape.alt}
      attribution={landscape.attribution}
      src={landscape.src}
      height={landscape.height}
      width={landscape.width}
      {...additionalProps}
    />,
  );
  shouldMatchSnapshot(
    'should render portrait image correctly',
    <Component
      alt={portrait.alt}
      attribution={portrait.attribution}
      src={portrait.src}
      height={portrait.height}
      width={portrait.width}
      {...additionalProps}
    />,
  );
  shouldMatchSnapshot(
    'should render square image correctly',
    <Component
      alt={square.alt}
      attribution={square.attribution}
      src={square.src}
      height={square.height}
      width={square.width}
      {...additionalProps}
    />,
  );
  shouldMatchSnapshot(
    'should render image with custom dimensions correctly',
    <Component
      alt={custom.alt}
      attribution={custom.attribution}
      src={custom.src}
      height={custom.height}
      width={custom.width}
      {...additionalProps}
    />,
  );
  shouldMatchSnapshot(
    'should render image with srcset correctly',
    <Component
      alt={landscape.alt}
      attribution={landscape.attribution}
      src={landscape.src}
      srcset={landscape.srcset}
      height={landscape.height}
      width={landscape.width}
    />,
  );
  if (Component.name === 'Img') {
    shouldMatchSnapshot(
      'should render image correctly without width',
      <Component
        alt={landscape.alt}
        attribution={landscape.attribution}
        src={landscape.src}
        srcset={landscape.srcset}
        height={landscape.height}
      />,
    );
  }
};

export default snapshotTests;
