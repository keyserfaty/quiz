import React from 'react'
import PropTypes from 'prop-types'
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

EmptyCard.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any
}

export default EmptyCard
