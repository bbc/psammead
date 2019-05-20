import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Brand from './index';

const svg = {
  group: (
    <g fillrule="evenodd">
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
      brandName="Default Brand Name"
      svgHeight={24}
      maxWidth={280}
      minWidth={180}
      svg={svg}
      url="https://www.bbc.co.uk/news"
    />,
  );

  shouldMatchSnapshot(
    'should render correctly with svg not provided',
    <Brand brandName="Default Brand Name" />,
  );

  shouldMatchSnapshot(
    'should render correctly with link not provided',
    <Brand brandName="Default Brand Name" svg={svg} />,
  );
});
