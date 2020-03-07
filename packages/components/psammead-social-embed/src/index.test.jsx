import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import SocialEmbed from './index';

describe('SocialEmbed', () => {
  shouldMatchSnapshot('should render correctly', <SocialEmbed />);

  it('should test example template', () => {
    const { container } = render(<SocialEmbed />);
    expect(container.querySelector('h1').textContent).toEqual('Hello World');
  });
});
