import React from 'react'
import { View, Text } from 'react-native'

import StepTemplate from '../../components/StepTemplate'

import Shallow from 'react-test-renderer/shallow'

const renderer = new Shallow()

test('Should render', () => {
  const component = renderer.render(<StepTemplate />)
  expect(component).toMatchSnapshot()
})

test('Should render contents', () => {
  const component = renderer.render(<StepTemplate header='header' footer='footer' />)
  expect(component).toMatchSnapshot()
})

test('Should render children', () => {
  const component = renderer.render(
    <StepTemplate header='header' footer='footer'>
      <View>
        <Text>Some child</Text>
      </View>
    </StepTemplate>
  )

  expect(component).toMatchSnapshot()
})
