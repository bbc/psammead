import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import RadioSchedule from './index';

describe('RadioSchedule', () => {
  shouldMatchSnapshot('should render correctly', <RadioSchedule />);

  it('should test example template', () => {
    const { container } = render(<RadioSchedule />);
    expect(container.querySelector('h1').textContent).toEqual('Hello World');
  });

});
