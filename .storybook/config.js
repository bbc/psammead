import React from 'react'
import { configure } from '@storybook/react'

function loadStories () {
  require('glob-loader!./stories.pattern')
}

configure(loadStories, module)