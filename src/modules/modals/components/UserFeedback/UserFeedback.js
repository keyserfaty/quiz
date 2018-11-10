import React from 'react'
import Modal from '../../../../components/Modal/Modal'
import {TouchableOpacity, Text} from 'react-native'

import styles from './statics/styles'

const UserFeedback = props => {
  const { onCloseModal, data } = props
  
  return (
    <Modal title={data.title} subtitle={data.subtitle}>
      <TouchableOpacity style={styles.footer} onPress={onCloseModal}>
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>
    </Modal>
  )
}

export default UserFeedback
