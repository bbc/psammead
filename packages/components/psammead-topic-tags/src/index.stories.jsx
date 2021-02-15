import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import { TopicTags, TopicTag } from '.';
import notes from '../README.md';

const STORY_KIND = 'Components/TopicTags';

storiesOf(STORY_KIND, module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ dir, service, script, text }) => {
      const shortText = service === 'news' ? text : text.trim().split(' ')[0];

      return (
        <TopicTags dir={dir} service={service} script={script}>
          <TopicTag topicName={shortText} topicLink="#" />
        </TopicTags>
      );
    },
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'multiple topics',
    ({ dir, service, script, text }) => {
      const shortText = service === 'news' ? text : text.trim().split(' ')[0];

      return (
        <TopicTags dir={dir} service={service} script={script}>
          <TopicTag topicName={shortText} topicLink="#" />
          <TopicTag topicName={shortText} topicLink="#" />
          <TopicTag topicName={shortText} topicLink="#" />
          <TopicTag topicName={shortText} topicLink="#" />
        </TopicTags>
      );
    },
    { notes, knobs: { escapeHTML: false } },
  )
  .add('with a non-TopicTag child', ({ dir, service, script, text }) => {
    const shortText = service === 'news' ? text : text.trim().split(' ')[0];
    return (
      <TopicTags dir={dir} service={service} script={script}>
        <TopicTag topicName={shortText} topicLink="#" />
        <div>
          <p>ignore</p>
        </div>
        <TopicTag topicName={shortText} topicLink="#" />
      </TopicTags>
    );
  })
  .add('with no children', ({ dir, service, script, text }) => {
    const shortText = service === 'news' ? text : text.trim().split(' ')[0];
    return (
      <TopicTags dir={dir} service={service} script={script} text={shortText} />
    );
  });
