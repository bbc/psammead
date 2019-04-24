import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { text, select, withKnobs } from '@storybook/addon-knobs';
import { latin } from '@bbc/gel-foundations/scripts';
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
      const choice = select('Typography', styles, 'Pica');
      const typographyStyle = typography[`get${choice}`](latin);

      return (
        <Timestamp datetime="1530947227000" typographyStyle={typographyStyle}>
          {text('Timestamp Text', '7 July 2018')}
        </Timestamp>
      );
    },
    { notes },
  )
  .add(
    'with "updated" prefix',
    () => {
      const choice = select('Typography', styles, 'Pica');
      const typographyStyle = typography[`get${choice}`](latin);

      return (
        <Timestamp datetime="1530947227000" typographyStyle={typographyStyle}>
          {text('Timestamp Text', 'Updated 7 July 2018')}
        </Timestamp>
      );
    },
    { notes },
  );
