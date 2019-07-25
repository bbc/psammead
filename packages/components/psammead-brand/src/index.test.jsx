import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import Brand from './index';

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
const png = 'test-image-name';

describe('Brand', () => {
  describe('in SVG compatible browser', () => {
    shouldMatchSnapshot(
      'should render brand SVG correctly with link provided',
      <Brand
        product="Default Brand Name"
        serviceLocalisedName="Service"
        svgHeight={24}
        maxWidth={280}
        minWidth={180}
        svg={svg}
        png={png}
        svgSupport
        url="https://www.bbc.co.uk/news"
      />,
    );

    shouldMatchSnapshot(
      'should render brand SVG correctly with link not provided',
      <Brand
        product="Default Brand Name"
        serviceLocalisedName="Service"
        svg={svg}
        png={png}
        svgSupport
        svgHeight={24}
        maxWidth={280}
        minWidth={180}
      />,
    );

    shouldMatchSnapshot(
      'should render brand SVG correctly with no service Localised Name',
      <Brand
        product="BBC News"
        svg={svg}
        png={png}
        svgSupport
        svgHeight={24}
        maxWidth={280}
        minWidth={180}
      />,
    );

    shouldMatchSnapshot(
      'should render brand SVG correctly with transparent borders',
      <Brand
        product="BBC News"
        svg={svg}
        png={png}
        svgSupport
        svgHeight={24}
        maxWidth={280}
        minWidth={180}
        borderTop
        borderBottom
      />,
    );

    describe('assertions - visually hidden text', () => {
      it('should have role of text when serviceLocalisedName is provided', () => {
        const { container } = render(
          <Brand
            product="Default Brand Name"
            serviceLocalisedName="Service"
            svgSupport
            svgHeight={24}
            maxWidth={280}
            minWidth={180}
            svg={svg}
            png={png}
            url="https://www.bbc.co.uk/news"
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
            svgSupport
            svgHeight={24}
            maxWidth={280}
            minWidth={180}
            svg={svg}
            png={png}
            url="https://www.bbc.co.uk/news"
          />,
        );

        expect(container.querySelector('span').getAttribute('role')).toBeNull();
      });
    });
  });

  describe('in SVG incompatible browser', () => {
    shouldMatchSnapshot(
      'should render PNG fallback correctly with link provided',
      <Brand
        product="Default Brand Name"
        serviceLocalisedName="Service"
        svgHeight={24}
        maxWidth={280}
        minWidth={180}
        svg={svg}
        svgSupport={false}
        png={png}
        url="https://www.bbc.co.uk/news"
      />,
    );

    shouldMatchSnapshot(
      'should render brand PNG correctly with link not provided',
      <Brand
        product="Default Brand Name"
        serviceLocalisedName="Service"
        svg={svg}
        png={png}
        svgSupport={false}
        svgHeight={24}
        maxWidth={280}
        minWidth={180}
      />,
    );

    shouldMatchSnapshot(
      'should render brand PNG correctly with no service Localised Name',
      <Brand
        product="BBC News"
        svg={svg}
        png={png}
        svgSupport={false}
        svgHeight={24}
        maxWidth={280}
        minWidth={180}
      />,
    );

    shouldMatchSnapshot(
      'should render brand PNG correctly with transparent borders',
      <Brand
        product="BBC News"
        svg={svg}
        png={png}
        svgSupport={false}
        svgHeight={24}
        maxWidth={280}
        minWidth={180}
        borderTop
        borderBottom
      />,
    );

    describe('assertions - visually hidden text', () => {
      it('should have role of text when serviceLocalisedName is provided', () => {
        const { container } = render(
          <Brand
            product="Default Brand Name"
            serviceLocalisedName="Service"
            svgSupport={false}
            svgHeight={24}
            maxWidth={280}
            minWidth={180}
            svg={svg}
            png={png}
            url="https://www.bbc.co.uk/news"
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
            svgSupport={false}
            svgHeight={24}
            maxWidth={280}
            minWidth={180}
            svg={svg}
            png={png}
            url="https://www.bbc.co.uk/news"
          />,
        );

        expect(container.querySelector('span').getAttribute('role')).toBeNull();
      });
    });
  });
});
