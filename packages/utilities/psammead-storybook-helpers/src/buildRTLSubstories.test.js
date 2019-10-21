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

afterEach(jest.clearAllMocks);

it('should get all stories', () => {
  const stories = { kind: 'Components|Brand' };
  buildRTLSubstories({ stories });

  expect(getStorybook).toHaveBeenCalled();
});

it('should add the withServicesKnob decorator so that the default service is configured', () => {
  const stories = { kind: 'Components|Brand' };
  buildRTLSubstories({ stories });

  expect(withServicesKnob.default).toHaveBeenCalledWith({
    defaultService: 'arabic',
  });
  expect(mockAddDecorator).toHaveBeenCalledWith('withServicesKnob');
});

it("should build RTL variants of story kind's full suite of stories", () => {
  const stories = { kind: 'Components|Brand' };
  buildRTLSubstories({ stories });

  expect(storiesOf.mock.calls[0][0]).toEqual('Components|Brand/RTL');
  expect(mockAddStory.mock.calls[0][0]).toEqual('RTL - without brand link');

  expect(storiesOf.mock.calls[1][0]).toEqual('Components|Brand/RTL');
  expect(mockAddStory.mock.calls[1][0]).toEqual('RTL - with brand link');

  expect(mockAddStory.mock.calls[2]).toBeUndefined();
  expect(mockAddStory.mock.calls[2]).toBeUndefined();
});

it("should build RTL variants of story kind's specified stories", () => {
  const stories = { kind: 'Components|Brand' };
  buildRTLSubstories({ stories, include: ['with brand link'] });

  expect(storiesOf.mock.calls[0][0]).toEqual('Components|Brand/RTL');
  expect(mockAddStory.mock.calls[0][0]).toEqual('RTL - with brand link');

  expect(storiesOf.mock.calls[1]).toBeUndefined();
});

it('should not create RTL substories when no params', () => {
  buildRTLSubstories({});

  expect(mockAddStory).not.toHaveBeenCalled();
});
