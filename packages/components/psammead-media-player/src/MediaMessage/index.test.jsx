import React from 'react';
import { render } from '@testing-library/react';
import MediaMessage from './index';
import '@testing-library/jest-dom/extend-expect';

it('should display the media message', () => {
  const { getByText } = render(
    <MediaMessage
      service="news"
      noJsMessage="Please enable Javascript or try a different browser"
      placeholderSrc="http://foo.bar/placeholder.png"
      placeholderSrcset="http://foo.bar/placeholder.png"
    />,
  );
  const mediaMessage = getByText(
    'Please enable Javascript or try a different browser',
  );
  expect(mediaMessage).toBeInTheDocument();
});
