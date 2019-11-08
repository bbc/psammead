import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import OnwardJourneys from '.';

describe('OnwardJourneys', () => {
  shouldMatchSnapshot('should render correctly', <OnwardJourneys />);

  it('should test example template', () => {
    const { container } = render(<OnwardJourneys />);
    expect(container.querySelector('h1').textContent).toEqual('Hello World');
  });
});
