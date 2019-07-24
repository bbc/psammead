import React from 'react';
import { storiesOf } from '@storybook/react';

import * as numerals from '.';

const numeralSystems = Object.keys(numerals);
const stories = storiesOf('Utilities|Numerals', module);
stories.add('hiya', () => <h1>hi</h1>);

numeralSystems.forEach(numeralSystem => {
  stories.add(numeralSystem, () => (
    <div>
      <span>{numeralSystem}</span>
      <span>{numerals[numeralSystem]}</span>
    </div>
  ));
});
