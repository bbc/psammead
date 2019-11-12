import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import { latin } from '@bbc/gel-foundations/scripts';
import Navigation, {
  NavigationUl,
  NavigationLi,
  CanonicalDropdown,
  DropdownNavigationLi,
} from './index';
import igboNavData from '../testHelpers/igbo';
import pidginNavData from '../testHelpers/pidgin';

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
              data-navigation="test_navigation"
            >
              {title}
            </NavigationLi>
          );
        })}
      </NavigationUl>
    </Navigation>,
  );
});

describe('Navigation', () => {
  shouldMatchSnapshot(
    'dropdown should render correctly',
    <CanonicalDropdown>
      {pidginNavData.map((item, index) => {
        const active = index === 0;
        const { title, url } = item;

        return (
          <DropdownNavigationLi
            script={latin}
            service="news"
            url={url}
            active={active}
            currentPageText="Current page"
          >
            {title}
          </DropdownNavigationLi>
        );
      })}
    </CanonicalDropdown>,
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
