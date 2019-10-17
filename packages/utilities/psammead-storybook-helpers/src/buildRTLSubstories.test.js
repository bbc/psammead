import { getStorybook, storiesOf } from '@storybook/react';
import buildRTLSubstories from './buildRTLSubstories';
import * as withServicesKnob from './withServicesKnob';

const mockAddStory = jest.fn();
const mockAddDecorator = jest.fn(() => ({ add: mockAddStory }));

withServicesKnob.default = jest.fn(() => 'withServicesKnob');

jest.mock('@storybook/react', () => ({
  storiesOf: jest.fn(() => ({
    addDecorator: mockAddDecorator,
  })),
  getStorybook: jest.fn(() => [
    {
      kind: 'Components|Brand',
      fileName: './packages/components/psammead-brand/src/index.stories.jsx',
      stories: [
        {
          name: 'without brand link',
        },
        {
          name: 'with brand link',
        },
      ],
    },
    {
      kind: 'Components|Caption',
      fileName: './packages/components/psammead-caption/src/index.stories.jsx',
      stories: [
        {
          name: 'default',
        },
        {
          name: 'with offscreen text',
        },
        {
          name: 'containing an inline link',
        },
      ],
    },
  ]),
}));

buildRTLSubstories();

it('should get all stories', () => {
  expect(getStorybook).toHaveBeenCalled();
});

it('should add the withServicesKnob decorator', () => {
  expect(withServicesKnob.default).toHaveBeenCalledWith({
    defaultService: 'arabic',
  });
  expect(mockAddDecorator).toHaveBeenCalledWith('withServicesKnob');
});

it('should create the substories', () => {
  expect(storiesOf.mock.calls[0][0]).toEqual('Components|Brand/RTL');
  expect(mockAddStory.mock.calls[0][0]).toEqual('RTL - without brand link');

  expect(storiesOf.mock.calls[1][0]).toEqual('Components|Brand/RTL');
  expect(mockAddStory.mock.calls[1][0]).toEqual('RTL - with brand link');

  expect(storiesOf.mock.calls[2][0]).toEqual('Components|Caption/RTL');
  expect(mockAddStory.mock.calls[2][0]).toEqual('RTL - default');

  expect(storiesOf.mock.calls[3][0]).toEqual('Components|Caption/RTL');
  expect(mockAddStory.mock.calls[3][0]).toEqual('RTL - with offscreen text');

  expect(storiesOf.mock.calls[4][0]).toEqual('Components|Caption/RTL');
  expect(mockAddStory.mock.calls[4][0]).toEqual(
    'RTL - containing an inline link',
  );
});
