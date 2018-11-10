import React from 'react'
import Welcome from '../../components/Welcome/index'

import renderer from 'react-test-renderer'

test('Should return a List element', () => {
  const onPress = () => console.log('pressed')
  
  const tree = renderer.create(<Welcome onPress={onPress} />).toJSON()
  expect(tree).toMatchSnapshot()
})