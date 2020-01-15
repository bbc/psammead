import React from 'react';
import { render, act, cleanup, fireEvent } from '@testing-library/react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Canonical from '.';

afterEach(cleanup);

describe('Media Player: Canonical', () => {
  shouldMatchSnapshot(
    'should render an iframe',
    <Canonical
      src="https://foo.bar/iframe"
      title="Media player"
      service="news"
    />,
  );

  it('should render a timeout message if the timeout expires', () => {
    jest.useFakeTimers();
    const { getByText } = render(
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
  });

  it('should not render a timeout message if it loads successfully', () => {
    const { getByTitle, getByText } = render(
      <Canonical
        src="https://foo.bar/iframe"
        title="Media player"
        service="news"
      />,
    );
    fireEvent.load(getByTitle('Media player'));
    expect(() =>
      getByText(
        'There was a problem loading this content. Please check your internet connection and try again.',
      ),
    ).toThrow();
  });
});
