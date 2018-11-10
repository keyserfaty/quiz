import React from 'react'
import { View, Text } from 'react-native'

import Button from '../../../../components/Button'

import styles from './statics/styles'

const Welcome = props => {
  const { onNextStep } = props

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Welcome to the Trivia Challenge!</Text>
      </View>
      <View style={styles.body}>
        <Text>You will be presented with 10 true and false questions.</Text>
        <Text>Can you score 100%?</Text>
      </View>
      <View style={styles.footer}>
        <Button primary onPress={() => onNextStep(1)}>Begin</Button>
      </View>
    </View>
  )
}

export default Welcome