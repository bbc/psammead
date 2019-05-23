import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  getCanon,
  getTrafalgar,
  getParagon,
  getDoublePica,
  getGreatPrimer,
  getBodyCopy,
  getPica,
  getLongPrimer,
  getBrevier,
  getMinion,
} from '@bbc/gel-foundations/typography';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import TypographyText from './typography';

const typographyStory = typographyFunc =>
  inputProvider([{ name: 'sample text' }], ([text], script) => (
    <TypographyText script={script} typographyFunc={typographyFunc}>
      {text}
    </TypographyText>
  ));

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .add('Canon', typographyStory(getCanon))
  .add('Trafalgar', typographyStory(getTrafalgar))
  .add('Paragon', typographyStory(getParagon))
  .add('DoublePica', typographyStory(getDoublePica))
  .add('GreatPrimer', typographyStory(getGreatPrimer))
  .add('BodyCopy', typographyStory(getBodyCopy))
  .add('Pica', typographyStory(getPica))
  .add('LongPrimer', typographyStory(getLongPrimer))
  .add('Brevier', typographyStory(getBrevier))
  .add('Minion', typographyStory(getMinion));
