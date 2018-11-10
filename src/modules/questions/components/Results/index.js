import React from 'react'
import { View, Text } from 'react-native'

import Button from '../../../../components/Button'

const Welcome = props => {
  const { onNextStep } = props

  return (
    <View>
      <Text>Welcome to the Trivia Challenge!</Text>
      <Text>You will be presented with 10 true and false questions.</Text>
      <Text>Can you score 100%?</Text>
      <Button primary onPress={() => onNextStep(1)}>Begin</Button>
    </View>
  )
}

export default Welcome