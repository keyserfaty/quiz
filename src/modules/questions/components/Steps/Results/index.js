import React from 'react'

import Results from './Results'

class ResultsContainer extends React.Component {
  onRestart = () => {
    if (this.props.onNextStep && this.props.onfetchQuestions) {
      this.props.onfetchQuestions()
      this.props.onNextStep(0)
    }
  }

  componentWillUnmount () {
    if (this.props.onCleanResponses) {
      this.props.onCleanResponses()
    }
  }

  render () {
    return (
      <Results
        {...this.props}
        onRestart={this.onRestart}
      />
    )
  }
}

export default ResultsContainer