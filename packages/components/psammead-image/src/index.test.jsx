import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import snapshotTests from './testHelpers/snapshotTests';
import { landscape } from './testHelpers/fixtureData';
import Image, { Img } from '.';

describe("Image - imported as default 'Image'", () => {
  snapshotTests(Img);
});

describe("Image - imported as '{ Img }'", () => {
  snapshotTests(Image);
});

describe("Image - imported as default 'Image'", () => {
  const props = { ...landscape, width: null };
  shouldMatchSnapshot(
    'should render image correctly without width',
    <Image {...props} />,
  );
});

describe("Image - imported as '{ Img }'", () => {
  const props = { ...landscape, width: null };
  shouldMatchSnapshot(
    'should render image correctly without width',
    <Img {...props} />,
  );
});
