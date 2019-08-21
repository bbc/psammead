import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import renderer from 'react-test-renderer';
import Placeholder from '.';

describe('Media Player: Placeholder', () => {
  const mockOnClick = jest.fn();

  afterEach(() => {
    jest.resetModules();
  });

  shouldMatchSnapshot(
    'should render a placeholder image with callback function',
    <Placeholder onClick={mockOnClick} src="http://foo.bar/placeholder.png" />,
  );

  it('should call onClick when clicked', () => {
    const tree = renderer.create(
      <Placeholder
        onClick={mockOnClick}
        src="http://foo.bar/placeholder.png"
      />,
    );

    tree.root.findByType('div').props.onClick();
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });
});
