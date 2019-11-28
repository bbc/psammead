import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render, fireEvent, getByRole } from '@testing-library/react';
import { latin } from '@bbc/gel-foundations/scripts';
import {
  Dropdown,
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
  describe('Open menu button', () => {
    it('should call onClose handler when clicked', () => {
      const mockOnClose = jest.fn();
      const mockOnOpen = jest.fn();
      const { container } = render(
        <CanonicalMenuButton
          announcedText="Menu"
          onOpen={mockOnOpen}
          isOpen
          onClose={mockOnClose}
        />,
      );
      const menuButton = getByRole(container, 'button');

      fireEvent.click(menuButton);
      expect(mockOnClose).toHaveBeenCalledTimes(1);
      expect(mockOnOpen).not.toHaveBeenCalled();
    });

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
    it('should call onOpen handler when clicked', () => {
      const mockOnClose = jest.fn();
      const mockOnOpen = jest.fn();
      const { container } = render(
        <CanonicalMenuButton
          announcedText="Menu"
          onOpen={mockOnOpen}
          isOpen={false}
          onClose={mockOnClose}
        />,
      );
      const menuButton = getByRole(container, 'button');

      fireEvent.click(menuButton);
      expect(mockOnOpen).toHaveBeenCalledTimes(1);
      expect(mockOnClose).not.toHaveBeenCalled();
    });

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

describe('Dropdown navigation', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <Dropdown>{dropdownList}</Dropdown>,
  );
});

describe('AMP Menu Button', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <AmpMenuButton announcedText="Menu" onToggle="" />,
  );
});
