import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import ImagePlaceholder from './index';

const landscapeImageRatio = 56.25;
const portraitImageRatio = 177.78;

describe('ImagePlaceholder', () => {
  shouldMatchSnapshot(
    'should render landscape images correctly',
    <ImagePlaceholder ratio={landscapeImageRatio} />,
  );
  shouldMatchSnapshot(
    'should render portrait images correctly',
    <ImagePlaceholder ratio={portraitImageRatio} />,
  );
});
