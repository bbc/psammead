import React from 'react'
import { mount } from 'enzyme'

import WSSocialSlice from '.'

describe('Button Component', function() {

  it('renders without props', function() {
    const wrapper = mount((<WSSocialSlice />))
    const button = wrapper.find('div')

    expect(button.length).toBe(1)
  })
  
})