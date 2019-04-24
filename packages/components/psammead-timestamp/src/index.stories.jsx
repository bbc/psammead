import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { text, select, withKnobs } from '@storybook/addon-knobs';
import scripts from '@bbc/gel-foundations/scripts';
import * as typography from '@bbc/gel-foundations/typography';
import notes from '../README.md';
import Timestamp from '.';

const styles = Object.keys(typography)
  .map(key => {
    if (
      typeof typography[key] === 'function' &&
      key.substring(0, 3) === 'get'
    ) {
      return key.substring(3);
    }
    return null;
  })
  .filter(style => style);

storiesOf('Timestamp', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => {
      const selectedOption = select('Script', Object.keys(scripts), 'latin');
      const selectedScript = scripts[selectedOption];

      const style = select('Typography', styles, 'Brevier');
      const typographyFunc = typography[`get${style}`];

      return (
        <Timestamp
          datetime="1530947227000"
          typographyFunc={typographyFunc}
          script={selectedScript}
        >
          {text('Timestamp Text', '7 July 2018')}
        </Timestamp>
      );
    },
    { notes },
  )
  .add(
    'with "updated" prefix',
    () => {
      const selectedOption = select('Script', Object.keys(scripts), 'latin');
      const selectedScript = scripts[selectedOption];

      const style = select('Typography', styles, 'Brevier');
      const typographyFunc = typography[`get${style}`];

      return (
        <Timestamp
          datetime="1530947227000"
          typographyFunc={typographyFunc}
          script={selectedScript}
        >
          {text('Timestamp Text', 'Updated 7 July 2018')}
        </Timestamp>
      );
    },
    { notes },
  );
