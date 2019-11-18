import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin, arabic } from '@bbc/gel-foundations/scripts';
import MostReadTitle from './title';

describe('Most read title', () => {
  shouldMatchSnapshot(
    'should render with ReithSans',
    <MostReadTitle header="Most Read" script={latin} service="news" />,
  );

  shouldMatchSnapshot(
    'should render with BBCNassimArabic',
    <MostReadTitle header="Most Read" script={arabic} service="arabic" />,
  );
});
