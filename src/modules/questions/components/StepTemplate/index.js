import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import styles from './statics/styles'

const StepTemplate = props => {
  const { style, children, header, footer } = props

  return (
    <View style={[styles.container, style]}>
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

StepTemplate.propTypes = {
  style: PropTypes.array,
  header: PropTypes.any,
  footer: PropTypes.any,
  children: PropTypes.any
}

export default StepTemplate