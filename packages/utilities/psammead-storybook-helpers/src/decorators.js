import inputProvider from './input-provider';

/* eslint-disable import/prefer-default-export */
export const dirDecorator = storyFn => {
  const decoratedComponent = inputProvider(null, storyFn);
  return decoratedComponent();
};
