import React from 'react';
import notes from '../README.md';
import ImagePlaceholder from '.';

const landscapeImageRatio = 56.25;
const squareImageRatio = 100;
const portraitImageRatio = 177.78;

export default {
  title: 'Components|Images/ImagePlaceholder',
};

export const _16X9ImagePlaceholder = () => (
  <ImagePlaceholder ratio={landscapeImageRatio} />
);

_16X9ImagePlaceholder.story = {
  name: '16x9 image placeholder',
  parameters: { notes },
};

export const _1X1ImagePlaceholder = () => (
  <ImagePlaceholder ratio={squareImageRatio} />
);

_1X1ImagePlaceholder.story = {
  name: '1x1 image placeholder',
  parameters: { notes },
};

export const _9X16ImagePlaceholder = () => (
  <ImagePlaceholder ratio={portraitImageRatio} />
);

_9X16ImagePlaceholder.story = {
  name: '9x16 image placeholder',
  parameters: { notes },
};
