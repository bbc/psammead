import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled, { ThemeProvider } from 'styled-components'

import ExampleButton from '.'

const theme = {
    primary: '#0B53C6'
}

const StyledContainer = styled.div`
  width: 200px;
`

storiesOf('ExampleButton', module)

  .add('with text', () => (
    <StyledContainer>
      <ExampleButton onClick={action('clicked')}>Example Button</ExampleButton>
    </StyledContainer>
  ))

  .add('with emojis', () => (
    <StyledContainer>
      <ExampleButton onClick={action('clicked')}>😀 😎 👍 💯</ExampleButton>
    </StyledContainer>
  ))

  .add('with a theme provider', () => (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <ExampleButton onClick={action('clicked')}>Example Button</ExampleButton>
      </StyledContainer>
    </ThemeProvider>
  ))