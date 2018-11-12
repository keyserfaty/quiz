import React from 'react'

import Alert from '../index'

import Shallow from 'react-test-renderer/shallow'

const renderer = new Shallow()

test('Should render', () => {
  let component = renderer.render(<Alert msg='Some msg' />)

  expect(component).toMatchSnapshot('initial render')
})
