import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import PsammeadBulletedList from './index';

describe('PsammeadBulletedList', () => {
  shouldMatchSnapshot('should render correctly', <PsammeadBulletedList />);

  it('should test example template', () => {
    const { container } = render(<PsammeadBulletedList />);
    expect(container.querySelector('h1').textContent).toEqual('Hello World');
  });
});
