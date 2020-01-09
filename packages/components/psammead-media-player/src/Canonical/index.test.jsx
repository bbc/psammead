import React from 'react';
import { render, act } from '@testing-library/react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Canonical from '.';

describe('Media Player: Canonical', () => {
  shouldMatchSnapshot(
    'should render an iframe',
    <Canonical
      src="https://foo.bar/iframe"
      title="Media player"
      service="news"
    />,
  );

  it('should render a timeout message if timeout timer expires', () => {
    jest.useFakeTimers();
    const { getByText, unmount } = render(
      <Canonical
        src="https://foo.bar/iframe"
        title="Media player"
        service="news"
        timeoutMs={2000}
      />,
    );

    act(() => {
      jest.runTimersToTime(3000);
    });

    expect(
      getByText(
        'There was a problem loading this content. Please check your internet connection and try again.',
      ),
    );
    unmount();
  });
});
