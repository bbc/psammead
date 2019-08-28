import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
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
    const { container } = render(
      <Placeholder
        onClick={mockOnClick}
        src="http://foo.bar/placeholder.png"
      />,
    );
    fireEvent.click(container.firstChild);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
