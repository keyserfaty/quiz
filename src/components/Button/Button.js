import React from 'react'
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native'

import styles from './statics/styles'

const Button = props => {
  const { onPress, children, primary, outline, disabled, style, status } = props

  const spinnerColor = {
    primary: 'rgba(55,175,255,0.87)',
    outline: 'rgba(255, 255, 255, 1)'
  }

  return (
    <TouchableOpacity 
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.button, 
        primary && styles.primary, 
        disabled && styles.disabled, 
        outline && styles.outline, 
        style
      ]}>
      {status === 'pending' && <ActivityIndicator size="small" style={styles.spinner} color={spinnerColor[primary ? 'primary' : 'outline']} /> }
      <Text style={[
        styles.text,
        primary && styles.textPrimary,
        outline && styles.textOutline
      ]}>{children.toUpperCase()}</Text>
    </TouchableOpacity>
  )
}

export default Button
