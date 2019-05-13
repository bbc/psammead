import inputProvider from './input-provider';

/* eslint-disable import/prefer-default-export */
export const dirDecorator = storyFn => {
  const renderFn = (slotTexts, script, dir) => storyFn({ script, dir });

  const decoratedComponent = inputProvider(null, renderFn);
  return decoratedComponent();
};
