import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import {
  CanonicalDropdown,
  DropdownUl,
  DropdownNavigationLi,
  CanonicalHamburgerMenu,
} from './index';
import pidginNavData from '../../testHelpers/pidgin';

describe('Canonical dropdown navigation', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <CanonicalDropdown announcedText="Menu" onClose={() => {}}>
      <DropdownUl role="list">
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
      </DropdownUl>
    </CanonicalDropdown>,
  );
});

describe('Canonical hamburger menu', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <CanonicalHamburgerMenu announcedText="Menu" onOpen={() => {}} />,
  );
});
