import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import snapshotTests from './testHelpers/snapshotTests';
import { landscape } from './testHelpers/fixtureData';
import Image, { Img } from '.';

function matchSnapshot(description, Component, props) {
  shouldMatchSnapshot(description, <Component {...props} />);
}

describe("Image - imported as default 'Image'", () => {
  snapshotTests(Img);
});

describe("Image - imported as '{ Img }'", () => {
  snapshotTests(Image);
});

describe("Image - imported as default 'Image'", () => {
  const props = Object.assign({}, landscape);
  delete props.width;
  matchSnapshot('should render image correctly without width', Image, {
    ...landscape,
    width: null,
  });
});

describe("Image - imported as '{ Img }'", () => {
  matchSnapshot('should render image correctly without width', Image, {
    ...landscape,
    width: null,
  });
});
