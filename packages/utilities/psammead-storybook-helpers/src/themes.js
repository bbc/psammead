import { create } from '@storybook/theming';

const createTheme = props =>
  create({
    brandTitle: 'BBC Psammead',
    brandUrl: 'https://github.com/bbc/psammead',
    brandImage:
      'https://user-images.githubusercontent.com/11341355/54079666-af202780-42d8-11e9-9108-e47ea27fddc5.png',
    ...props,
  });

export const light = createTheme({ base: 'light' });
export const dark = createTheme({ base: 'dark' });
