import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from '../../components/LoginPage'

test('should render Login Page successfully', () => {
  const wrapper = shallow(<LoginPage />)
  expect(wrapper).toMatchSnapshot()
})

test('should call start logout on button click', () => {
  const startLogin = jest.fn()
  const wrapper = shallow(<LoginPage startLogin={startLogin}/> )
  wrapper.find('button').simulate('click')
  expect(startLogin).toHaveBeenCalled()
})
