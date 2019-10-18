import { getStorybook, storiesOf } from '@storybook/react';
import withServicesKnob from './withServicesKnob';

export default () => {
  getStorybook().forEach(({ kind, stories }) => {
    stories.forEach(({ name, render }) => {
      storiesOf(`${kind}/RTL`, module)
        .addDecorator(withServicesKnob({ defaultService: 'arabic' }))
        .add(`RTL - ${name}`, render);
    });
  });
};
