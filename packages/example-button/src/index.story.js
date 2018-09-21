import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled, { ThemeProvider } from 'styled-components'

// Addons
import { withKnobs, boolean, color } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
import ExampleButtonReadme from '../README.md';

import ExampleButton from '.'

const StyledContainer = styled.div`
  width: 200px;
`

const stories = storiesOf('ExampleButton', module);
stories.addDecorator(withKnobs);

stories
  .add(
    'with text',
    withReadme(ExampleButtonReadme, () => {
      const disabled = boolean('Disabled', false)
      return (
        <StyledContainer>
          <ExampleButton disabled={disabled} onClick={action('clicked')}>Example Button</ExampleButton>
        </StyledContainer>
      )
    }    
  ))

  .add(
    'with emojis',
    withReadme(ExampleButtonReadme, () => {
      const disabled = boolean('Disabled', false)

      return (
        <StyledContainer>
          <ExampleButton disabled={disabled} onClick={action('clicked')}>😀 😎 👍 💯</ExampleButton>
        </StyledContainer>
      )
    })
  )

  .add(
    'with a theme provider',
    withReadme(ExampleButtonReadme, () => {
      const disabled = boolean('Disabled', false)
      const label = 'Theme'
      const theme = {
        colour: color('Text Colour', '#ededed'),
        borderColour: color('Border Colour', '#000000')
      }

      return (
        <ThemeProvider theme={theme}>
          <StyledContainer>
            <ExampleButton disabled={disabled} onClick={action('clicked')}>Example Button</ExampleButton>
          </StyledContainer>
        </ThemeProvider>
      )
    }
  ))