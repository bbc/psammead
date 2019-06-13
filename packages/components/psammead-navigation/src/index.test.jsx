import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import Navigation, { NavigationUl, NavigationLi } from './index';

describe('Navigation', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <Navigation>
      <NavigationUl>
        <NavigationLi url="/igbo" script={latin} />
      </NavigationUl>
    </Navigation>,
  );
});
