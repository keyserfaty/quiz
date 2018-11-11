import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, ScrollView } from 'react-native'

import StepTemplate from '../../StepTemplate'
import Button from '../../../../../components/Button'

import styles from './statics/styles'

const Results = props => {
  const { onRestart, responses, correctResponses } = props

  const header = (
    <View style={styles.header}>
      <Text style={styles.title}>You scored</Text>
      <View style={styles.counter}>
        <Text>{correctResponses} / 10</Text>
      </View>
    </View>
  )

  const footer = (
    <Button primary onPress={onRestart}>Play again?</Button>
  )

  return (
    <StepTemplate header={header} footer={footer}>
      <ScrollView>
        <View>
          { responses.map((answer, i) => (
            <View key={i} style={styles.response}>
              <Text style={styles.answer}>{answer.correct ? '✅' : '❌'}</Text>
              <Text>{answer.question.replace(/&quot;/g, '"')}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </StepTemplate>
  )
}

Results.propTypes = {
  onRestart: PropTypes.func,
  responses: PropTypes.array,
  correctResponses: PropTypes.number
}

export default Results