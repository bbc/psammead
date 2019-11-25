import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render, fireEvent, getByRole } from '@testing-library/react';
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

describe('Canonical', () => {
  describe('Dropdown navigation', () => {
    shouldMatchSnapshot(
      'should render correctly',
      <CanonicalDropdown announcedText="Menu" onClose={() => {}}>
        {dropdownList}
      </CanonicalDropdown>,
    );

    describe('CrossButton', () => {
      it('should call onClose handler when clicked', () => {
        const mockOnClick = jest.fn();
        const { container } = render(
          <CanonicalDropdown announcedText="Menu" onClose={() => mockOnClick()}>
            {dropdownList}
          </CanonicalDropdown>,
        );

        fireEvent.click(getByRole(container, 'button'));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Hamburger menu', () => {
    shouldMatchSnapshot(
      'should render correctly',
      <CanonicalHamburgerMenu announcedText="Menu" onOpen={() => {}} />,
    );

    it('should call onOpen handler when clicked', () => {
      const mockOnClick = jest.fn();
      const { container } = render(
        <CanonicalHamburgerMenu
          announcedText="Menu"
          onOpen={() => mockOnClick()}
        />,
      );

      fireEvent.click(getByRole(container, 'button'));
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });
});

describe('Amp dropdown navigation', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <AmpDropdown announcedText="Menu" onClose="">
      {dropdownList}
    </AmpDropdown>,
  );
});

describe('AMP hamburger menu', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <AmpHamburgerMenu announcedText="Menu" onOpen="" />,
  );
});
