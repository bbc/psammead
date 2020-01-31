import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import Canonical from '.';
import '@testing-library/jest-dom/extend-expect';

describe('Media Player: Canonical', () => {
  shouldMatchSnapshot(
    'should render an iframe',
    <Canonical src="https://foo.bar/iframe" title="Media player" />,
  );

  it('should contain the noscript tag for use in non-JS scenarios ', () => {
    render(
      <Canonical
        src="http://foo.bar/iframe/amp"
        placeholderSrc="http://foo.bar/placeholder.png"
        placeholderSrcset="http://foo.bar/placeholder.png"
        showPlaceholder={false}
        title="Media player"
        service="news"
        noJsMessage="Please enable Javascript or try a different browser"
      />,
    );
    expect(document.querySelector('noscript')).toBeInTheDocument();
  });
});
