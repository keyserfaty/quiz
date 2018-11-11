import React from 'react'
import { View, Text } from 'react-native'

import Card from '../index'

import Shallow from 'react-test-renderer/shallow'

const renderer = new Shallow()

test('Should render', () => {
  let component = renderer.render(<Card />)

  expect(component).toMatchSnapshot('initial render')
})

test('Should display a different style', () => {
  let component = renderer.render(<Card style={{ prop: true }} />)

  expect(component).toMatchSnapshot('initial render')
})

test('Should display some children', () => {
  let component = renderer.render(
    <Card>
      <View>
        <Text>Some children</Text>
      </View>
    </Card>
  )

  expect(component).toMatchSnapshot('initial render')
})
