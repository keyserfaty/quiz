import React from 'react'
import { View, Text } from 'react-native'

import Button from '../../../../../components/Button'
import StepTemplate from '../../StepTemplate'

import styles from './statics/styles'

const Question = props => {
  const { onNextQuestion, category, question, count } = props

  const header = (
    <Text style={styles.title}>{category}</Text>
  )

  const footer = (
    <View style={styles.footer}>
      <Text style={styles.count}>{count} / 10</Text>
      <Button
        primary
        onPress={() => onNextQuestion({ question, response: false })}
      >No</Button>
      
      <Button
        primary
        onPress={() => onNextQuestion({ question, response: true })}
      >Yes</Button>
    </View>
  )
  return (
    <StepTemplate header={header} footer={footer}>
      <Text>{question.question}</Text>
    </StepTemplate>
  )
}

export default Question