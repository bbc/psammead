import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import TopicTags from './index';

describe('TopicTags', () => {
  shouldMatchSnapshot('should render correctly', <TopicTags />);

  it('should test example template', () => {
    const { container } = render(<TopicTags />);
    expect(container.querySelector('h1').textContent).toEqual('Hello World');
  });
});
