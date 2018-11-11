import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

import { styles } from './statics/styles'

const Modal = (props) => {
  const { type, title, subtitle, spinner } = props

  return (
    <View style={[styles.container, type]}>
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
              <ActivityIndicator size="large" color="#0000ff" />
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
