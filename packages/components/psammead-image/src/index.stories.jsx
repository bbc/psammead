import React from 'react';
import { Img } from '.';
import stories, { getProps } from './testHelpers/stories';
import { landscape } from './testHelpers/fixtureData';
import notes from '../README.md';

stories(Img, 'Components|Images/Image - Img').add(
  'image without width',
  () => <Img {...getProps(landscape, false)} width={null} />,
  { notes },
);
