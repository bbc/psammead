import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { TopicTags, TopicTag } from './index';

describe('TopicTags', () => {
  shouldMatchSnapshot(
    'should render correctly for ltr',
    <TopicTags dir="ltr">
      <TopicTag topicName="test1" topicLink="#" />
    </TopicTags>,
  );

  shouldMatchSnapshot(
    'should render correctly for rtl',
    <TopicTags dir="rtl">
      <TopicTag topicName="test1" topicLink="#" />
    </TopicTags>,
  );

  shouldMatchSnapshot(
    'should render correctly for multiple topic tags',
    <TopicTags dir="ltr">
      <TopicTag topicName="test1" topicLink="#" />
      <TopicTag topicName="test2" topicLink="#" />
      <TopicTag topicName="test3" topicLink="#" />
      <TopicTag topicName="test4" topicLink="#" />
    </TopicTags>,
  );
});
