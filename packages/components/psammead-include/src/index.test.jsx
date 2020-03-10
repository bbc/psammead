import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import Include from './index';

describe('Include', () => {
  shouldMatchSnapshot('should render correctly', <Include />);

  it('should test example template', () => {
    const { container } = render(<Include />);
    expect(container.querySelector('h1').textContent).toEqual('Hello World');
  });

});
