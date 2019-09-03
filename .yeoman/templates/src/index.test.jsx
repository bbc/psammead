import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import <%= componentName %> from './index';

describe('<%= componentName %>', () => {
  shouldMatchSnapshot('should render correctly', <<%= componentName %> />);

  it('should test example template', () => {
    const { container } = render(<<%= componentName %> />);
    expect(container.querySelector('h1').textContent).toEqual('Hello World');
  });

});
