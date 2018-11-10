import React from 'react'
import propTypes from 'prop-types'

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
    this.setState({
      status: this.props.status || 'init',
      disabled: this.props.disabled || false
    })
  }

  componentDidUpdate (oldProps) {
    if (this.props.rerender !== oldProps.rerender) {
      this.setState({ status: 'init' })
    }

    if (this.props.disabled !== oldProps.disabled) {
      this.setState({ disabled: this.props.disabled })
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