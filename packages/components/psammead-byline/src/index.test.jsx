import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Byline from './index';

describe('Byline', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <Byline
      service="news"
      avatar={{ src: 'http://www.bbc.co.uk/john-smith.jpg' }}
      name="John Smith"
      title="Art editor"
    />,
  );
  shouldMatchSnapshot(
    'should render correctly without an avatar',
    <Byline service="news" name="By John Smith" title="Art editor" />,
  );
});
