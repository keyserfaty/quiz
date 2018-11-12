import React from 'react'
import PropTypes from 'prop-types'

import Alert from '../../../../components/Alert'

const UserFeedback = props => {
  const { onCloseAlert, data } = props
  
  return (
    <Alert 
      type={data.type} 
      msg={data.msg} 
      onCloseAlert={onCloseAlert} 
    />
  )
}

UserFeedback.propTypes = {
  onCloseAlert: PropTypes.func,
  data: PropTypes.object
}

export default UserFeedback
