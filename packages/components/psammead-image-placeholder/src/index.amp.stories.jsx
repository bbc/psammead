import React from 'react';
import { storiesOf } from '@storybook/react';
import notes from '../README.md';
import ImagePlaceholderAmp from './index.amp';
import { ampDecorator } from '../../../../.storybook/preview';

storiesOf('Components/Images/ImagePlaceholderAmp', module)
  .addDecorator(ampDecorator)
  .add(
    '16x9 image placeholder',
    () => (
      <amp-img
        src="https://ichef.bbci.co.uk/news/800/cpsprodpb/14763/production/_112811838__112171791_nicktriggle_tr-nc.png"
        width="645px"
        height="128px"
      >
        <ImagePlaceholderAmp />
      </amp-img>
    ),
    { notes },
  )
  .add(
    '16x9 dark mode image placeholder',
    () => (
      <amp-img
        src="https://ichef.bbci.co.uk/news/800/cpsprodpb/14763/production/_112811838__112171791_nicktriggle_tr-nc.png"
        width="645px"
        height="128px"
      >
        <ImagePlaceholderAmp darkMode />
      </amp-img>
    ),
    { notes },
  );
