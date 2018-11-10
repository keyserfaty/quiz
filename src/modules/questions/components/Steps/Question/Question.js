import React from 'react'
import { View, Text } from 'react-native'

import Button from '../../../../../components/Button'
import StepTemplate from '../../StepTemplate'

import styles from './statics/styles'

const Question = props => {
  const { onNextQuestion, category, question, correct, count } = props

  const header = (
    <Text style={styles.title}>{category}</Text>
  )

  const footer = (
    <View style={styles.footer}>
      <Text style={styles.count}>{count} / 10</Text>
      <Button
        primary
        noSpin={true}
        onPress={() => onNextQuestion({ question, response: correct === false })}
      >No</Button>
      
      <Button
        primary
        noSpin={true}
        onPress={() => onNextQuestion({ question, response: correct === true })}
      >Yes</Button>
    </View>
  )
  return (
    <StepTemplate header={header} footer={footer}>
      <Text>{question}</Text>
    </StepTemplate>
  )
}

export default Question