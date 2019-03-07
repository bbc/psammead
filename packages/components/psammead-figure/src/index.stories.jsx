import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import Caption from '@bbc/psammead-caption';
import Copyright from '@bbc/psammead-copyright';
import Image from '@bbc/psammead-image';
import ImagePlaceholder from '@bbc/psammead-image-placeholder';
import Readme from '../README.md';
import Figure from '.';

const imageAlt =
  'Map of the UK displaying Syrian refugees and asylum seekers per 10000 population. Ranges from 0 to 17.';
const imageSrc =
  'https://ichef.bbci.co.uk/news/640/cpsprodpb/439A/production/_100960371_syrians_and_asylum_v2-nc.png';
const imageWidth = 853;
const imageRatio = 125;

storiesOf('Figure', module)
  .addDecorator(withReadme(Readme))
  .add('containing Image', () => (
    <Figure>
      <Image alt={imageAlt} src={imageSrc} width={imageWidth} />
    </Figure>
  ))
  .add('containing Image, ImagePlaceholder, Copyright and Caption', () => (
    <Figure>
      <ImagePlaceholder ratio={imageRatio}>
        <Image alt={imageAlt} src={imageSrc} width={imageWidth} />
        <Copyright>Copyright</Copyright>
      </ImagePlaceholder>
      <Caption>Caption</Caption>
    </Figure>
  ));
