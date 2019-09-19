import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import MomentCalendars from './index';

describe('MomentCalendars', () => {
  shouldMatchSnapshot('should render correctly', <MomentCalendars />);

  it('should test example template', () => {
    const { container } = render(<MomentCalendars />);
    expect(container.querySelector('h1').textContent).toEqual('Hello World');
  });
});
