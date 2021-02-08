import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin, burmese, arabic } from '@bbc/gel-foundations/dist/scripts';
import { TopicTags, TopicTag } from './index';

describe('TopicTags', () => {
  const baseProps = {
    dir: 'ltr',
    service: 'news',
    script: latin,
  };

  shouldMatchSnapshot(
    'should correctly render a single topic for ltr',
    <TopicTags {...baseProps}>
      <TopicTag topicName="test1" topicLink="#" />
    </TopicTags>,
  );

  shouldMatchSnapshot(
    'should correctly render a single topic for rtl',
    <TopicTags {...baseProps} dir="rtl">
      <TopicTag topicName="test1" topicLink="#" />
    </TopicTags>,
  );

  shouldMatchSnapshot(
    'should correctly render multiple topic tags for ltr',
    <TopicTags {...baseProps}>
      <TopicTag topicName="test1" topicLink="#" />
      <TopicTag topicName="test2" topicLink="#" />
      <TopicTag topicName="test3" topicLink="#" />
      <TopicTag topicName="test4" topicLink="#" />
    </TopicTags>,
  );

  shouldMatchSnapshot(
    'should correctly render multiple topic tags for rtl',
    <TopicTags {...baseProps} dir="rtl">
      <TopicTag topicName="test1" topicLink="#" />
      <TopicTag topicName="test2" topicLink="#" />
      <TopicTag topicName="test3" topicLink="#" />
      <TopicTag topicName="test4" topicLink="#" />
    </TopicTags>,
  );

  shouldMatchSnapshot(
    'should correctly render a single topic tag for burmese',
    <TopicTags service="burmese" script={burmese} dir="rtl">
      <TopicTag topicName="test1" topicLink="#" />
    </TopicTags>,
  );

  shouldMatchSnapshot(
    'should correctly render multiple topic tags for arabic',
    <TopicTags service="arabic" script={arabic} dir="rtl">
      <TopicTag topicName="test1" topicLink="#" />
      <TopicTag topicName="test2" topicLink="#" />
      <TopicTag topicName="test3" topicLink="#" />
      <TopicTag topicName="test4" topicLink="#" />
    </TopicTags>,
  );
});
