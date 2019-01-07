import React from 'react';
// Enzyme adapters that provides compatibility with React 16.x:
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Paragraph from './index';

// configure enzyme to use the adapter you want it to use:
Enzyme.configure({ adapter: new Adapter() });

describe('Paragraph Enzyme test', () => {
  it('should render to static HTML', () => {
    expect(
      Enzyme.render(<Paragraph>This is text in a paragraph.</Paragraph>).text(),
    ).toEqual('This is text in a paragraph.');
  });
});
