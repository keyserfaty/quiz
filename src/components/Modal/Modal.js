import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import { View, Text } from 'react-native'

import { styles } from './statics/styles'

const Modal = (props) => {
  const { title, subtitle, spinner } = props

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.titleContainer}>
          { title && (
            <Text style={styles.title}>
              {title}
            </Text>
          ) }
          { subtitle && (
            <Text style={styles.subtitle}>
              {subtitle}
            </Text>
          ) }
          { spinner && (
            <View style={styles.spinner}>
              <Spinner visible={spinner} />
            </View>
          )}
        </View>
        <View style={styles.children}>
          {props.children}
        </View>
      </View>
    </View>
  )
}

export default Modal
