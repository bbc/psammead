import { configure } from '@storybook/react'

import { setOptions } from '@storybook/addon-options';
 
// Option defaults:
setOptions({
  name: 'CARL',
  url: 'https:github.com/bbc/carl',
  addonPanelInRight: true,
  sidebarAnimations: true
});

function loadStories () {
  require('glob-loader!./stories.pattern')
}

configure(loadStories, module)