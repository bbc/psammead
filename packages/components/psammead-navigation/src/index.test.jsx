import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import { latin } from '@bbc/gel-foundations/scripts';
import Navigation, { NavigationUl, NavigationLi } from './index';
import igboNavData from '../testHelpers/igbo';

describe('Navigation', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <Navigation script={latin} skipLinkText="Wụga n’ọdịnaya" service="news">
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
              service="news"
              data-naviation="test_navigation"
            >
              {title}
            </NavigationLi>
          );
        })}
      </NavigationUl>
    </Navigation>,
  );
});

describe('Assertions', () => {
  it('should add extra props passed to the NavigationLi link', () => {
    const { container } = render(
      <NavigationLi
        key="test-key"
        url="http://test.url"
        script={latin}
        currentPageText="Current page"
        service="news"
        active
        data-navigation="test_navigation"
      >
        Testing exta props
      </NavigationLi>,
    );
    expect(
      container.querySelector('a').getAttribute('data-navigation'),
    ).toEqual('test_navigation');
  });
});
