import React from 'react'
import propTypes from 'prop-types'
import { isNil } from 'ramda'

import Button from './Button'

class ButtonWithSpinnerContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      status: 'init',
      disabled: false
    }
  }

  componentDidMount () {
    const { status, disabled } = this.props

    this.setState({
      status: !isNil(status) ? status : 'init',
      disabled: !isNil(disabled) ? disabled : false
    })
  }

  componentDidUpdate (oldProps) {
    const { status, disabled } = this.props

    if (this.props.rerender !== oldProps.rerender) {
      this.setState({ status: 'init' })
    }

    if (disabled !== oldProps.disabled) {
      this.setState({ disabled })
    }

    if (status !== oldProps.status) {
      this.setState({ status })
    }
  }

  onPress = () => {
    if (!this.props.noSpin) {
      this.setState({
        status: 'pending',
        disabled: true
      })
    }

    if (this.props.onPress) {
      this.props.onPress()
    }
  }

  render () {
    const { status, disabled } = this.state

    return (
      <Button
        {...this.props}
        disabled={disabled}
        status={status}
        onPress={this.onPress}
      />
    )
  }
}

ButtonWithSpinnerContainer.propTypes = {
  onPress: propTypes.func.isRequired
}

export default ButtonWithSpinnerContainer