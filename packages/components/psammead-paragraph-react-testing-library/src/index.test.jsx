import React from 'react';
// import react-testing-library methods
import { render } from 'react-testing-library';

import Paragraph from './index';

// The render method renders a React element into the DOM and returns utility functions for testing the component.
const { container } = render(
  <Paragraph>This is text in a paragraph.</Paragraph>,
);

// react-testing-library can use Jest as its test runner
describe('Paragraph react-testing-library suite', () => {
  it('runs a snapshot test', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
