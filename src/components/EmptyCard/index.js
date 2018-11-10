import React from 'react'
import { View } from 'react-native'

import styles from './statics/styles'

const EmptyCard = props => {
  const { style } = props

  return (
    <View style={[styles.container, style]}>
      {props.children}
    </View>
  )
}

export default EmptyCard
