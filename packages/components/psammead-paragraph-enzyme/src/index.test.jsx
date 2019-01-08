import React from 'react';
import Enzyme from 'enzyme';
// Enzyme adapter provides compatibility with React 16.x:
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Paragraph from './index';

// configure enzyme to use the adapter you want it to use:
Enzyme.configure({ adapter: new Adapter() });

const p = <Paragraph>This is text in a paragraph.</Paragraph>;

// This suite uses Jest as its test runner, and is thus run from the root level `npm test`:
describe('Mounting, shallow and render tests', () => {
  describe('Paragraph tested with Enzyme mount', () => {
    // not sure what this does
    it('should mount a paragraph without throwing an error', () => {
      const wrapper = Enzyme.mount(p);
      // .c0
      expect(wrapper.length).toBe(1);
    });
  });

  describe('Paragraph tested with Enzyme shallow render', () => {
    it('should render correctly with no props', () => {
      const component = Enzyme.shallow(<Paragraph />);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('should render correctly with text', () => {
      const component = Enzyme.shallow(p);
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe('Paragraph tested with Enzyme rendering to static HTML', () => {
    it('should render to static HTML', () => {
      expect(Enzyme.render(p).text()).toEqual('This is text in a paragraph.');
    });
  });
});
