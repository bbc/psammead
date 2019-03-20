import React from 'react';
import { storiesOf } from '@storybook/react';
import notes from '../README.md';
import { Headline, SubHeading } from './index';

storiesOf('Headline', module).add(
  'default',
  () => <Headline>This is my headline.</Headline>,
  { notes },
);

storiesOf('SubHeading', module).add(
  'default',
  () => (
    <SubHeading text="This is a SubHeading" script="ethiopic">
      አደጋው የደረሰበት አካባቢ ነዋሪዎች ለማያውቋቸው የአደጋው ሰለባዎች ልባቸው በሀዘን ተሰብሮ ከመጣው ጋር ሲያለቅሱና
      ሃዘናቸውን ሲገልጹ የሰውነት ሩህሩህነታቸውን ለዓለም አሳይተው ርዕስ ሆነው ሰንብተዋል።
    </SubHeading>
  ),
  { notes },
);
