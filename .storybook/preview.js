import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import appWrapper from './app-wrapper';

addDecorator(withA11y);
addDecorator(appWrapper);
addParameters({
  a11y: {
    options: {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa', 'wcag21aa'],
      },
      iframes: true,
    },
  },
});
