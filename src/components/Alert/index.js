import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './statics/styles'

const Alert = (props) => {
  const { type, msg, onCloseAlert } = props

  return (
    <View style={styles.container}>
      <View style={[styles.alert, styles[type]]}>
        <View style={styles.msgContainer}>
          <Text style={styles.msg}>{msg}</Text>
          <TouchableOpacity onPress={onCloseAlert}>
            <Text style={styles.msg}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

Alert.propTypes = {
  type: PropTypes.string,
  msg: PropTypes.string,
  children: PropTypes.any,
  onCloseAlert: PropTypes.func
}

export default Alert
