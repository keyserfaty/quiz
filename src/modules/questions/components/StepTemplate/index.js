import React from 'react'
import { View } from 'react-native'

import styles from './statics/styles'

const StepTemplate = props => {
  const { children, header, footer } = props

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {header}
      </View>
      <View style={styles.body}>
        {children}
      </View>
      <View style={styles.footer}>
        {footer}
      </View>
    </View>
  )
}

export default StepTemplate