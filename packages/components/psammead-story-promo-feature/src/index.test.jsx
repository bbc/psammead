import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import FeaturedStoryPromo from './index';

describe('FeaturedStoryPromo', () => {
  shouldMatchSnapshot('should render correctly', <FeaturedStoryPromo />);

  it('should test example template', () => {
    const { container } = render(<FeaturedStoryPromo />);
    expect(container.querySelector('h1').textContent).toEqual('Hello World');
  });

});
