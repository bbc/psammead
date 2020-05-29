module.exports = {
  stories: ['../packages/**/*.stories.jsx'],
  addons: [
    '@storybook/addon-notes/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-viewport/register',
  ],
};
