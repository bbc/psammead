import { getStorybook, storiesOf } from '@storybook/react';
import withServicesKnob from './withServicesKnob';

const matchesStoryKind = kind => story => story.kind === kind;

const matchesStoryName = name => story => story.name === name;

const buildRTLSubstory = (kind, name, storyFn) =>
  storiesOf(`${kind}/RTL`, module)
    .addDecorator(withServicesKnob({ defaultService: 'arabic' }))
    .add(`RTL - ${name}`, storyFn);

export default ({ stories = {}, include = [] }) => {
  const allStories = getStorybook();
  const storyKind = allStories.find(matchesStoryKind(stories.kind));

  if (storyKind) {
    if (include.length) {
      include.forEach(name => {
        const story = storyKind.stories.find(matchesStoryName(name));

        if (story) {
          buildRTLSubstory(stories.kind, name, story.render);
        }
      });
    } else {
      storyKind.stories.forEach(({ name, render }) =>
        buildRTLSubstory(stories.kind, name, render),
      );
    }
  }
};
