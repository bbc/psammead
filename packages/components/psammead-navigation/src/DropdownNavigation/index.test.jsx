import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import {
  CanonicalDropdown,
  AmpDropdown,
  DropdownUl,
  DropdownLi,
  CanonicalHamburgerMenu,
  AmpHamburgerMenu,
} from './index';
import pidginNavData from '../../testHelpers/pidgin';

const dropdownList = (
  <DropdownUl>
    {pidginNavData.map((item, index) => {
      const active = index === 3;
      const { title, url } = item;

      return (
        <DropdownLi
          script={latin}
          service="news"
          url={url}
          key={title}
          active={active}
          currentPageText="Current page"
        >
          {title}
        </DropdownLi>
      );
    })}
  </DropdownUl>
);

describe('Canonical dropdown navigation', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <CanonicalDropdown announcedText="Menu" onClose={() => {}}>
      {dropdownList}
    </CanonicalDropdown>,
  );
});

describe('Amp dropdown navigation', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <AmpDropdown announcedText="Menu" onClose="">
      {dropdownList}
    </AmpDropdown>,
  );
});

describe('Canonical hamburger menu', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <CanonicalHamburgerMenu announcedText="Menu" onOpen={() => {}} />,
  );
});

describe('AMP hamburger menu', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <AmpHamburgerMenu announcedText="Menu" onOpen="" />,
  );
});
