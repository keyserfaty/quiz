import React from 'react'
import { View, Text } from 'react-native'

import Button from '../../../../components/Button'

import styles from './statics/styles'

const Question = props => {
  const { onNextStep, category, question, count } = props

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>
      <View style={styles.question}>
        <Text>{question}</Text>
      </View>
      <Text style={styles.count}>{count} / 10</Text>
      <View style={styles.buttonsContainer}>
        <Button primary onPress={() => onNextStep(1)}>No</Button>
        <Button primary onPress={() => onNextStep(1)}>Yes</Button>
      </View>
    </View>
  )
}

export default Question