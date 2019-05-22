import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
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
import { latin } from '@bbc/gel-foundations/scripts';
import TypographyText from '.';

const script = latin;
const sampleText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .add('Canon', () => (
    <TypographyText script={script} typographyFunc={getCanon}>
      {text('Enter text', sampleText)}
    </TypographyText>
  ))
  .add('Trafalgar', () => (
    <TypographyText script={script} typographyFunc={getTrafalgar}>
      {text('Enter text', sampleText)}
    </TypographyText>
  ))
  .add('Paragon', () => (
    <TypographyText script={script} typographyFunc={getParagon}>
      {text('Enter text', sampleText)}
    </TypographyText>
  ))
  .add('DoublePica', () => (
    <TypographyText script={script} typographyFunc={getDoublePica}>
      {text('Enter text', sampleText)}
    </TypographyText>
  ))
  .add('GreatPrimer', () => (
    <TypographyText script={script} typographyFunc={getGreatPrimer}>
      {text('Enter text', sampleText)}
    </TypographyText>
  ))
  .add('BodyCopy', () => (
    <TypographyText script={script} typographyFunc={getBodyCopy}>
      {text('Enter text', sampleText)}
    </TypographyText>
  ))
  .add('Pica', () => (
    <TypographyText script={script} typographyFunc={getPica}>
      {text('Enter text', sampleText)}
    </TypographyText>
  ))
  .add('LongPrimer', () => (
    <TypographyText script={script} typographyFunc={getLongPrimer}>
      {text('Enter text', sampleText)}
    </TypographyText>
  ))
  .add('Brevier', () => (
    <TypographyText script={script} typographyFunc={getBrevier}>
      {text('Enter text', sampleText)}
    </TypographyText>
  ))
  .add('Minion', () => (
    <TypographyText script={script} typographyFunc={getMinion}>
      {text('Enter text', sampleText)}
    </TypographyText>
  ));
