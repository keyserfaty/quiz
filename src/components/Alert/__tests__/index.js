import React from 'react'

import Alert from '../index'

import Shallow from 'react-test-renderer/shallow'

const renderer = new Shallow()

test('Should render', () => {
  let component = renderer.render(<Alert title='Some title' subtitle='Some subtitle' />)

  expect(component).toMatchSnapshot('initial render')
})

test('Should only display a title', () => {
  let component = renderer.render(<Alert title='Some title' />)

  expect(component).toMatchSnapshot('initial render')
})

test('Should only display a subtitle', () => {
  let component = renderer.render(<Alert subtitle='Some subtitle' />)

  expect(component).toMatchSnapshot('initial render')
})
