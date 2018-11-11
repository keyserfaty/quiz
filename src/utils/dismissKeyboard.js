import React from 'react'
import PropTypes from 'prop-types'

import { Keyboard, TouchableWithoutFeedback } from 'react-native'

const DismissKeyboard = props => {
  const { children } = props
  
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
      {children}
    </TouchableWithoutFeedback>
  )
}

DismissKeyboard.propTypes = {
  children: PropTypes.any
}

export default DismissKeyboard
