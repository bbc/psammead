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
});
