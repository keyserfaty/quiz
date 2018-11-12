import React from 'react'
import List from '../../components/List/List'

import Shallow from 'react-test-renderer/shallow'

const renderer = new Shallow()

test('Should render', () => {
  const component = renderer.render(<List />)
  expect(component).toMatchSnapshot()
})

test('Should render step 0', () => {
  const component = renderer.render(<List step={0} />)
  expect(component).toMatchSnapshot()
})

test('Should render step 1', () => {
  const component = renderer.render(<List step={1} />)
  expect(component).toMatchSnapshot()
})

test('Should render step 2', () => {
  const component = renderer.render(<List step={2} />)
  expect(component).toMatchSnapshot()
})