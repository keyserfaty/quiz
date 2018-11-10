import React from 'react'
import { View, Text } from 'react-native'

import Button from '../../../../components/Button'

import styles from './statics/styles'

const Question = props => {
  const { onNextStep } = props

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entertainment: Videogames</Text>
      <View style={styles.question}>
        <Text>Some question text</Text>
      </View>
      <Text style={styles.count}>1 / 10</Text>
      <View style={styles.buttonsContainer}>
        <Button primary onPress={() => onNextStep(1)}>No</Button>
        <Button primary onPress={() => onNextStep(1)}>Yes</Button>
      </View>
    </View>
  )
}

export default Question