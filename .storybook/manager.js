import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import brandImage from './brand.png';

const theme = create({
  base: 'light',
  brandTitle: 'BBC Psammead',
  brandUrl: 'https://github.com/bbc/psammead',
  brandImage: `${brandImage}`,
});

addons.setConfig({
  panelPosition: 'bottom',
  theme,
});
