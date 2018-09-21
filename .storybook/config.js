import React from 'react'
import { configure } from '@storybook/react'

import { setOptions } from '@storybook/addon-options';
 
// Option defaults:
setOptions({
  name: 'Bach Components',
  url: 'https:github.com/bbc/carl',
  goFullScreen: false,
  addonPanelInRight: true,
  sidebarAnimations: true
});

function loadStories () {
  require('glob-loader!./stories.pattern')
}

configure(loadStories, module)