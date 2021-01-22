/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  withServicesKnob,
  buildRTLSubstories,
} from '@bbc/psammead-storybook-helpers';
import { oneOf, string } from 'prop-types';
import { TopicTags, TopicTag } from '.';
import notes from '../README.md';

const STORY_KIND = 'Components/TopicTagsContainer';

storiesOf(STORY_KIND, module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ dir }) => {
      return (
        <TopicTags dir={dir}>
          <TopicTag topicName={"test1"} topicLink={"#"}/>
        </TopicTags>
      );
    },
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'multiple stories',
    ({dir}) => {
      return (
        <TopicTags dir={dir}>
          <TopicTag topicName="test1" topicLink="#" />
          <TopicTag topicName="test2" topicLink="#" />
          <TopicTag topicName="test3" topicLink="#" />
          <TopicTag topicName="test4" topicLink="#" />
        </TopicTags>
      );
    },
    { notes, knobs: { escapeHTML: false } },
  );

buildRTLSubstories(STORY_KIND, { include: ['default'] });
