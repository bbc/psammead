import { withServicesKnob } from '@bbc/psammead-storybook-helpers';

export const arabicServiceDecorator = withServicesKnob({
  defaultService: 'arabic',
});

export const bengaliServiceDecorator = withServicesKnob({
  defaultService: 'bengali',
});

export const burmeseServiceDecorator = withServicesKnob({
  defaultService: 'burmese',
});

export const newsServiceDecorator = withServicesKnob({
  defaultService: 'news',
});
