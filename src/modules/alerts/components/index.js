import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import alerts from './types'
import * as actions from '../actions'

import UserFeedback from './UserFeedback/UserFeedbackContainer'

import * as selectors from '../selectors'

const Alert = (props) => {
  const { type } = props

  if (!type) return <View />

  switch (type) {
    case alerts.userFeedback:
      return <UserFeedback {...props} />

    default:
      return <View />
  }
}

const mapStateToProps = state => ({
  type: selectors.type(state),
  data: selectors.data(state),
  onConfirm: selectors.onConfirm(state),
  onCancel: selectors.onCancel(state)
})

const mapDispatchToProps = dispatch => ({
  onCloseAlert: () => dispatch({ type: actions.closeAlert })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alert)
