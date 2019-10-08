import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import { C_POSTBOX, C_WHITE } from '@bbc/psammead-styles/colours';
import Brand from '.';

const svg = {
  group: (
    <g fillRule="evenodd">
      <path d="M84.32" />
    </g>
  ),
  viewbox: {
    height: 24,
    width: 167.95,
  },
  ratio: 6.9979,
};

describe('Brand', () => {
  shouldMatchSnapshot(
    'should render correctly with link provided',
    <Brand
      product="Default Brand Name"
      serviceLocalisedName="Service"
      svgHeight={24}
      maxWidth={280}
      minWidth={180}
      svg={svg}
      url="https://www.bbc.co.uk/news"
      backgroundColour={C_POSTBOX}
      logoColour={C_WHITE}
      borderBottom
    />,
  );

  shouldMatchSnapshot(
    'should render correctly with link not provided',
    <Brand
      product="Default Brand Name"
      serviceLocalisedName="Service"
      svg={svg}
      svgHeight={24}
      maxWidth={280}
      minWidth={180}
      backgroundColour={C_POSTBOX}
      logoColour={C_WHITE}
      borderTop
    />,
  );

  shouldMatchSnapshot(
    'should render correctly with no service Localised Name',
    <Brand
      product="BBC News"
      svg={svg}
      svgHeight={24}
      maxWidth={280}
      minWidth={180}
      backgroundColour={C_POSTBOX}
      logoColour={C_WHITE}
    />,
  );

  shouldMatchSnapshot(
    'should render correctly with transparent borders',
    <Brand
      product="BBC News"
      svg={svg}
      svgHeight={24}
      maxWidth={280}
      minWidth={180}
      borderTop
      borderBottom
      backgroundColour={C_POSTBOX}
      logoColour={C_WHITE}
    />,
  );

  describe('assertions - visually hidden text', () => {
    it('should have role of text when serviceLocalisedName is provided', () => {
      const { container } = render(
        <Brand
          product="Default Brand Name"
          serviceLocalisedName="Service"
          svgHeight={24}
          maxWidth={280}
          minWidth={180}
          svg={svg}
          url="https://www.bbc.co.uk/news"
          backgroundColour={C_POSTBOX}
          logoColour={C_WHITE}
        />,
      );

      expect(container.querySelector('span').getAttribute('role')).toEqual(
        'text',
      );
    });

    it('should not have role of text when serviceLocalisedName is not provided', () => {
      const { container } = render(
        <Brand
          product="Default Brand Name"
          svgHeight={24}
          maxWidth={280}
          minWidth={180}
          svg={svg}
          url="https://www.bbc.co.uk/news"
          backgroundColour={C_POSTBOX}
          logoColour={C_WHITE}
        />,
      );

      expect(container.querySelector('span').getAttribute('role')).toBeNull();
    });

    it('should have data-brand header when borderBottom is provided', () => {
      const { container } = render(
        <Brand
          product="Default Brand Name"
          serviceLocalisedName="Service"
          svgHeight={24}
          maxWidth={280}
          minWidth={180}
          svg={svg}
          url="https://www.bbc.co.uk/news"
          backgroundColour={C_POSTBOX}
          logoColour={C_WHITE}
          borderBottom
        />,
      );

      expect(container.querySelector('div').getAttribute('data-brand')).toEqual(
        'header',
      );
    });

    it('should have data-brand footer when borderTop is provided', () => {
      const { container } = render(
        <Brand
          product="Default Brand Name"
          serviceLocalisedName="Service"
          svgHeight={24}
          maxWidth={280}
          minWidth={180}
          svg={svg}
          url="https://www.bbc.co.uk/news"
          backgroundColour={C_POSTBOX}
          logoColour={C_WHITE}
          borderTop
        />,
      );

      expect(container.querySelector('div').getAttribute('data-brand')).toEqual(
        'footer',
      );
    });
  });
});
