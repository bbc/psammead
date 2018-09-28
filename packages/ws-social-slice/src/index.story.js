import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ThemeProvider } from 'styled-components'

// Addons
import { withKnobs, boolean, color } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
import Readme from './README.md';

import WSSocialSlice from '.'

const stories = storiesOf('WSSocialSlice', module);

stories
  .addDecorator(withReadme(Readme))
  .addDecorator(withKnobs)

  .add('with no props', () => {
      return <WSSocialSlice />
    }    
  )