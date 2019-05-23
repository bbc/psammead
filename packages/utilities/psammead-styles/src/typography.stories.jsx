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

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .add(
    'Canon',
    inputProvider([{ name: 'sample text' }], ([text], script) => (
      <TypographyText script={script} typographyFunc={getCanon}>
        {text}
      </TypographyText>
    )),
  )
  .add(
    'Trafalgar',
    inputProvider([{ name: 'sample text' }], ([text], script) => (
      <TypographyText script={script} typographyFunc={getTrafalgar}>
        {text}
      </TypographyText>
    )),
  )
  .add(
    'Paragon',
    inputProvider([{ name: 'sample text' }], ([text], script) => (
      <TypographyText script={script} typographyFunc={getParagon}>
        {text}
      </TypographyText>
    )),
  )
  .add(
    'DoublePica',
    inputProvider([{ name: 'sample text' }], ([text], script) => (
      <TypographyText script={script} typographyFunc={getDoublePica}>
        {text}
      </TypographyText>
    )),
  )
  .add(
    'GreatPrimer',
    inputProvider([{ name: 'sample text' }], ([text], script) => (
      <TypographyText script={script} typographyFunc={getGreatPrimer}>
        {text}
      </TypographyText>
    )),
  )
  .add(
    'BodyCopy',
    inputProvider([{ name: 'sample text' }], ([text], script) => (
      <TypographyText script={script} typographyFunc={getBodyCopy}>
        {text}
      </TypographyText>
    )),
  )
  .add(
    'Pica',
    inputProvider([{ name: 'sample text' }], ([text], script) => (
      <TypographyText script={script} typographyFunc={getPica}>
        {text}
      </TypographyText>
    )),
  )
  .add(
    'LongPrimer',
    inputProvider([{ name: 'sample text' }], ([text], script) => (
      <TypographyText script={script} typographyFunc={getLongPrimer}>
        {text}
      </TypographyText>
    )),
  )
  .add(
    'Brevier',
    inputProvider([{ name: 'sample text' }], ([text], script) => (
      <TypographyText script={script} typographyFunc={getBrevier}>
        {text}
      </TypographyText>
    )),
  )
  .add(
    'Minion',
    inputProvider([{ name: 'sample text' }], ([text], script) => (
      <TypographyText script={script} typographyFunc={getMinion}>
        {text}
      </TypographyText>
    )),
  );
