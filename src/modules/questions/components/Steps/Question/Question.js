import React from 'react'
import { View, Text } from 'react-native'

import Button from '../../../../../components/Button'
import StepTemplate from '../../StepTemplate'

import styles from './statics/styles'

const Question = props => {
  const { onNextQuestion, category, question, correct, count } = props

  const header = (
    <View>
      <Text style={styles.title}>{category}</Text>
    </View>
  )

  const footer = (
    <View style={styles.footer}>
      <View style={styles.counter}>
        <Text style={styles.count}>{count} / 10</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          primary
          noSpin={true}
          onPress={() => onNextQuestion({ question, correct: correct === false })}
        >No</Button>
        <Button
          primary
          noSpin={true}
          onPress={() => onNextQuestion({ question, correct: correct === true })}
        >Yes</Button>
      </View>
    </View>
  )
  return (
    <StepTemplate header={header} footer={footer} style={[styles.bottomBar, { width: '100%' }]}>
      <Text style={styles.text}>{question.replace(/&quot;/g, '"')}</Text>
    </StepTemplate>
  )
}

export default Question