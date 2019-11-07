import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin, arabic } from '@bbc/gel-foundations/scripts';
import MostReadTitle from './title';

describe('Most read title', () => {
  shouldMatchSnapshot(
    'should render with ReithSans',
    <MostReadTitle script={latin} service="news" header="Most Read" />,
  );

  shouldMatchSnapshot(
    'should render with BBCNassimArabic',
    <MostReadTitle script={arabic} service="arabic" header="Most Read" />,
  );
});
