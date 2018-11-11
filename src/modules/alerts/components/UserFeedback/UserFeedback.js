import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'

import Alert from '../../../../components/Alert'

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

UserFeedback.propTypes = {
  onCloseModal: PropTypes.func,
  data: PropTypes.object
}

export default UserFeedback
