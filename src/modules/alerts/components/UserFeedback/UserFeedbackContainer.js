import React from 'react'
import UserFeedback from './UserFeedback'

class UserFeedbackContainer extends React.Component {
  render () {
    return (
      <UserFeedback {...this.props} />
    )
  }
}

export default UserFeedbackContainer
