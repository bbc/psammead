import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Img } from '.';
import stories, { getProps } from './testHelpers/stories';
import { landscape } from './testHelpers/fixtureData';
import notes from '../README.md';

const type = 'Img';

export const imageWithoutWidth = () => (
  <Img {...getProps(landscape, false, type)} width={null} />
);

imageWithoutWidth.story = {
  name: 'image without width',
  parameters: { notes },
};
