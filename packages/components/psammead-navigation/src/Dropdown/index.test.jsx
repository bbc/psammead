import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import {
  CanonicalDropdown,
  DropdownNavigationLi,
  CanonicalHamburgerMenu,
} from './index';
import pidginNavData from '../../testHelpers/pidgin';

describe('Navigation', () => {
  shouldMatchSnapshot(
    'dropdown should render correctly',
    <CanonicalDropdown announcedText="Menu" closeAction={() => {}}>
      {pidginNavData.map((item, index) => {
        const active = index === 3;
        const { title, url } = item;

        return (
          <DropdownNavigationLi
            script={latin}
            service="news"
            url={url}
            key={title}
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

describe('Hamburger menu', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <CanonicalHamburgerMenu announcedText="Menu" openAction={() => {}} />,
  );
});
