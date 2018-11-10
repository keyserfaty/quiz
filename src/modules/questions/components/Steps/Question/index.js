import React from 'react'

import Question from './Question'

class QuestionsContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      questionNum: 0
    }
  }

  onNextQuestion = response => {
    const { questionNum } = this.state

    this.setState({
      questionNum: questionNum + 1
    })

    if (this.props.onAddResponse) {
      this.props.onAddResponse(response)
    }
  }

  render () {
    const { questions } = this.props
    const { questionNum } = this.state
    
    return (
      <Question
        {...this.props}
        question={questions[questionNum]}
        onNextQuestion={this.onNextQuestion}
      />
    )
  }
}

export default QuestionsContainer