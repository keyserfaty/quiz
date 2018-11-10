import React from 'react'

import List from './List'

class ListContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      step: 0,
      responses: []
    }
  }

  onNextStep = () => {
    const { step } = this.state

    this.setState({
      step: step + 1
    })
  }

  onAddResponse = response => {
    const { responses } = this.state

    this.setState({
      responses: [
        ...responses,
        response
      ]
    })
  }

  render () {
    const { step, responses } = this.state

    return (
      <List
        {...this.props}
        step={step}
        responses={responses}
        onAddResponse={this.onAddResponse}
        onNextStep={this.onNextStep}
      />
    )
  }
}

export default ListContainer