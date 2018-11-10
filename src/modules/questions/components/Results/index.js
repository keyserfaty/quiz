import React from 'react'
import { View, Text } from 'react-native'

import StepTemplate from '../StepTemplate'
import Button from '../../../../components/Button'

import styles from './statics/styles'

const Results = props => {
  const { onNextStep, responses, score } = props

  const header = (
    <View style={styles.header}>
      <Text>You scored</Text>
      <Text>{score} / 10</Text>
    </View>
  )

  const footer = (
    <Button primary onPress={() => onNextStep(1)}>Play again?</Button>
  )

  return (
    <StepTemplate header={header} footer={footer}>
      { responses.map((answer, i) => (
        <View key={i} style={styles.response}>
          <Text>{answer.correct ? '+' : '-'}</Text>
          <Text>{answer.question}</Text>
        </View>
      )) }
    </StepTemplate>
  )
}

export default Results