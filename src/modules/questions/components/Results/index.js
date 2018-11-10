import React from 'react'
import { View, Text } from 'react-native'

import Button from '../../../../components/Button'

import styles from './statics/styles'

const Results = props => {
  const { onNextStep, responses, score } = props

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>You scored</Text>
        <Text>{score} / 10</Text>
      </View>
      <View style={styles.body}>
        { responses.map((answer, i) => (
          <View key={i} style={styles.response}>
            <Text>{answer.correct ? '+' : '-'}</Text>
            <Text>{answer.question}</Text>
          </View>
        )) }
      </View>
      <View style={styles.footer}>
        <Button primary onPress={() => onNextStep(1)}>Play again?</Button>
      </View>
    </View>
  )
}

export default Results