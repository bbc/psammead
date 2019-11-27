import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render, fireEvent, getByRole } from '@testing-library/react';
import { latin } from '@bbc/gel-foundations/scripts';
import {
  CanonicalDropdown,
  AmpDropdown,
  DropdownUl,
  DropdownLi,
  CanonicalMenuButton,
  AmpMenuButton,
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
      <CanonicalDropdown>{dropdownList}</CanonicalDropdown>,
    );
  });

  describe('Open menu button', () => {
    it('should call onClose handler when clicked', () => {
      const mockOnClick = jest.fn();
      const { container } = render(
        <CanonicalMenuButton
          announcedText="Menu"
          onOpen={() => {}}
          isOpen
          onClose={() => mockOnClick()}
        />,
      );

      fireEvent.click(getByRole(container, 'button'));
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Closed menu button', () => {
    it('should call onOpen handler when clicked', () => {
      const mockOnClick = jest.fn();
      const { container } = render(
        <CanonicalMenuButton
          announcedText="Menu"
          onOpen={() => mockOnClick()}
          isOpen={false}
          onClose={() => {}}
        />,
      );

      fireEvent.click(getByRole(container, 'button'));
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Open menu button', () => {
    shouldMatchSnapshot(
      'should render correctly',
      <CanonicalMenuButton
        announcedText="Menu"
        onOpen={() => {}}
        isOpen
        onClose={() => {}}
      />,
    );
  });

  describe('Closed menu button', () => {
    shouldMatchSnapshot(
      'should render correctly',
      <CanonicalMenuButton
        announcedText="Menu"
        onOpen={() => {}}
        isOpen={false}
        onClose={() => {}}
      />,
    );
  });
});

describe('Amp', () => {
  describe('Dropdown navigation', () => {
    shouldMatchSnapshot(
      'should render correctly',
      <AmpDropdown>{dropdownList}</AmpDropdown>,
    );
  });

  describe('Menu Button', () => {
    shouldMatchSnapshot(
      'should render correctly',
      <AmpMenuButton announcedText="Menu" onToggle="" />,
    );
  });
});
