import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Byline from './index';

describe('Byline', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <Byline
      service="news"
      avatar={{ src: 'https://i.pravatar.cc/128?img=69' }}
      name="John Smith"
      title="Art editor"
    />,
  );
  shouldMatchSnapshot(
    'should render correctly without an avatar',
    <Byline service="news" name="John Smith" title="Art editor" />,
  );
});
