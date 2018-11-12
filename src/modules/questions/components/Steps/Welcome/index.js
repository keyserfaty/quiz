import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

import Button from '../../../../../components/Button'
import Card from '../../../../../components/EmptyCard'
import StepTemplate from '../../StepTemplate'

import styles from './statics/styles'

const Welcome = props => {
  const { onNextStep, status } = props

  const footer = (
    <Button
      primary
      rerender={status}
      status={status}
      disabled={status !== 'success'}
      onPress={() => onNextStep(1)}
    >Begin</Button>
  )

  return (
    <StepTemplate footer={footer}>
      <Card>
        <Text style={[styles.title]}>Welcome to the Trivia Challenge!</Text>
        <Text style={styles.text}>You will be presented with 10 true and false questions.</Text>
        <Text style={[styles.text, { marginTop: 16 }]}>Can you score 100%?</Text>
      </Card>
    </StepTemplate>
  )
}

Welcome.propTypes = {
  onNextStep: PropTypes.func, 
  status: PropTypes.string
}

export default Welcome