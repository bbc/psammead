import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import Navigation, { NavigationUl, NavigationLi } from './index';
import igboNavData from '../testHelpers/igbo';

describe('Navigation', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <Navigation script={latin} skipLinkText="Wụga n’ọdịnaya" service="yoruba">
      <NavigationUl>
        {igboNavData.map((item, index) => {
          const { title, url } = item;
          const active = index === 0;

          return (
            <NavigationLi
              key={title}
              url={url}
              script={latin}
              active={active}
              currentPageText="Current page"
              service="yoruba"
            >
              {title}
            </NavigationLi>
          );
        })}
      </NavigationUl>
    </Navigation>,
  );
});
