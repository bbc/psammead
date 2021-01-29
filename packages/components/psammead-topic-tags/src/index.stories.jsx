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
    ({dir, service, script, text}) => {

      const shortText = (service === 'news') ? text : text.trim().split(' ')[0];

      return (
        <TopicTags dir={dir} service={service} script={script} >
          <TopicTag topicName={shortText} topicLink="#" />
          <TopicTag topicName={shortText} topicLink="#" />
          <TopicTag topicName={shortText} topicLink="#" />
          <TopicTag topicName={shortText} topicLink="#" />
        </TopicTags>
      );
    },
    { notes, knobs: { escapeHTML: false } },
  );

buildRTLSubstories(STORY_KIND, { include: ['default', 'multiple stories'] });
