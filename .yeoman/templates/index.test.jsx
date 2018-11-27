import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Title from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('Title tests', () => {
  test('render a title', () => {
    const wrapper = shallow(
      <Title />
    );

    expect(wrapper).toMatchSnapshot();
  });
});