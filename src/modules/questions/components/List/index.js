import React from 'react'
import { isNil } from 'ramda'

import List from './List'

class ListContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      step: 0
    }
  }

  onNextStep = stepNum => {
    const { step } = this.state

    this.setState({
      step: !isNil(stepNum) ? stepNum : step + 1
    })
  }

  render () {
    const { step } = this.state

    return (
      <List
        {...this.props}
        step={step}
        onNextStep={this.onNextStep}
      />
    )
  }
}

export default ListContainer