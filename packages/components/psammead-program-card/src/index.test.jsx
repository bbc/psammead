import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import ProgramCard from './index';

describe('ProgramCard', () => {
  shouldMatchSnapshot('should render correctly', <ProgramCard />);

  it('should test example template', () => {
    const { container } = render(<ProgramCard />);
    expect(container.querySelector('h1').textContent).toEqual('Hello World');
  });
});
