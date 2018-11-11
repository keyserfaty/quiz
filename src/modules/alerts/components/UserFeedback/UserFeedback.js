import React from 'react'
import Alert from '../../../../components/Alert'
import {TouchableOpacity, Text} from 'react-native'

import styles from './statics/styles'

const UserFeedback = props => {
  const { onCloseModal, data } = props
  
  return (
    <Alert type={data.type} title={data.title} subtitle={data.subtitle}>
      <TouchableOpacity style={styles.footer} onPress={onCloseModal}>
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>
    </Alert>
  )
}

export default UserFeedback
