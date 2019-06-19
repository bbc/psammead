import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Img } from '.';
import stories, { getProps } from './testHelpers/stories';
import { landscape } from './testHelpers/fixtureData';
import notes from '../README.md';

const type = 'Img';

stories(Img, 'Components|Images/Image - Img', false, {}, withKnobs, type).add(
  'image without width',
  () => <Img {...getProps(landscape, false, type)} width={null} />,
  { notes },
);
