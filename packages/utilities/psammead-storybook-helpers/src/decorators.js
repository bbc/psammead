import inputProvider from './input-provider';

/* eslint-disable import/prefer-default-export */
export const dirDecorator = storyFn => {
  const renderFn = ({ script, dir, service }) =>
    storyFn({ script, dir, service });

  const decoratedComponent = inputProvider(null, renderFn);
  return decoratedComponent();
};
