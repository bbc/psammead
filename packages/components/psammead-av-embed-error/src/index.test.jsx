import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import AvEmbedError from './index';

describe('AvEmbedError', () => {
  shouldMatchSnapshot('should render correctly', <AvEmbedError />);

  it('should test example template', () => {
    const { container } = render(<AvEmbedError />);
    expect(container.querySelector('h1').textContent).toEqual('Hello World');
  });
});
