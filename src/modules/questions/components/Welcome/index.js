import React from 'react'
import { View, Text } from 'react-native'

import Button from '../../../../components/Button'
import StepTemplate from '../StepTemplate'

const Welcome = props => {
  const { onNextStep } = props

  const header = (
    <Text>Welcome to the Trivia Challenge!</Text>
  )

  const footer = (
    <Button primary onPress={() => onNextStep(1)}>Begin</Button>
  )

  return (
    <StepTemplate header={header} footer={footer}>
      <Text>You will be presented with 10 true and false questions.</Text>
      <Text>Can you score 100%?</Text>
    </StepTemplate>
  )
}

export default Welcome