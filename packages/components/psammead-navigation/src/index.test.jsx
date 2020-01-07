import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import { latin } from '@bbc/gel-foundations/scripts';
import {
  CanonicalScrollableNavigation,
  AmpScrollableNavigation,
} from './ScrollableNavigation';
import Navigation, { NavigationUl, NavigationLi } from './index';
import igboNavData from '../testHelpers/igbo';

const navigationUlComponent = (
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
);

const NavigationExample = (
  <Navigation script={latin} service="news">
    {navigationUlComponent}
  </Navigation>
);

describe('Navigation', () => {
  shouldMatchSnapshot('should render correctly', NavigationExample);

  shouldMatchSnapshot(
    'should render correctly when isOpen is true',
    <Navigation script={latin} service="news" isOpen>
      {navigationUlComponent}
    </Navigation>,
  );

  shouldMatchSnapshot(
    'should render correctly when ampOpenClass prop is provided',
    <Navigation
      script={latin}
      skipLinkText="Wụga n’ọdịnaya"
      service="news"
      ampOpenClass="is-open"
    >
      {navigationUlComponent}
    </Navigation>,
  );
});

describe('Scrollable Navigation', () => {
  shouldMatchSnapshot(
    'should render scrollable Canonical version correctly',
    <CanonicalScrollableNavigation>
      {NavigationExample}
    </CanonicalScrollableNavigation>,
  );

  shouldMatchSnapshot(
    'should render non-scrollable Canonical version correctly',
    <CanonicalScrollableNavigation>
      {NavigationExample}
    </CanonicalScrollableNavigation>,
  );

  shouldMatchSnapshot(
    'should render AMP version correctly',
    <AmpScrollableNavigation>{NavigationExample}</AmpScrollableNavigation>,
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

  it('should set tab index on links to -1 if isScrollable is true on NavigationLi', () => {
    const { container } = render(
      <NavigationLi
        key="test-key"
        url="http://test.url"
        script={latin}
        currentPageText="Current page"
        service="news"
        isScrollable
        active
        data-navigation="test_navigation"
      >
        Testing isScrollable
      </NavigationLi>,
    );
    expect(container.querySelector('a').getAttribute('tabindex')).toEqual('-1');
  });
});
