import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Placeholder from '.';

describe('Media Player: Placeholder', () => {
  const mockOnClick = jest.fn();
  const withDuration = {
    duration: '2:30',
    durationSpoken: '2 minutes 30 seconds',
    datetime: 'PT2M30S',
  };

  afterEach(() => {
    jest.resetModules();
  });

  shouldMatchSnapshot(
    'should render a video placeholder',
    <Placeholder
      onClick={mockOnClick}
      src="http://foo.bar/placeholder.png"
      service="news"
      mediaInfo={{ title: 'Dog chases cat.', ...withDuration }}
      className="foo"
    />,
  );

  shouldMatchSnapshot(
    'should render a video placeholder without duration',
    <Placeholder
      onClick={mockOnClick}
      src="http://foo.bar/placeholder.png"
      service="news"
      mediaInfo={{ title: 'Dog chases cat.', ...withDuration }}
      className="foo"
    />,
  );

  shouldMatchSnapshot(
    'should render an audio placeholder',
    <Placeholder
      onClick={mockOnClick}
      src="http://foo.bar/placeholder.png"
      service="news"
      mediaInfo={{ type: 'audio', title: 'Dog barks at cat.', ...withDuration }}
      className="foo"
    />,
  );

  shouldMatchSnapshot(
    'should render an audio placeholder without duration',
    <Placeholder
      onClick={mockOnClick}
      src="http://foo.bar/placeholder.png"
      service="news"
      mediaInfo={{ type: 'audio', title: 'Dog barks at cat.', ...withDuration }}
      className="foo"
    />,
  );

  it('should call onClick when the placeholder or play button is clicked', () => {
    const { container } = render(
      <Placeholder
        onClick={mockOnClick}
        src="http://foo.bar/placeholder.png"
        service="news"
        mediaInfo={{ title: 'Dog chases cat.', ...withDuration }}
        className="foo"
      />,
    );
    fireEvent.click(getByText(container.firstChild, '2:30'));
    fireEvent.click(container.firstChild);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
