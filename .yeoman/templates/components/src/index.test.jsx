import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import <%= packageName %> from './index';

describe('<%= packageName %>', () => {
  shouldMatchSnapshot('should render correctly', <<%= packageName %> />);

  it('should test example template', () => {
    const { container } = render(<<%= packageName %> />);
    expect(container.querySelector('h1').textContent).toEqual('Hello World');
  });

});
