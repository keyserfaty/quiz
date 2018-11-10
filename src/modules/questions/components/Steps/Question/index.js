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
    const { questions } = this.props

    const nextQuestionNum = questionNum + 1

    if (questions.length - 1 > nextQuestionNum) {
      this.setState({
        questionNum: nextQuestionNum
      })
      
      return this.props.onAddResponse(response)
    }

    this.props.onNextStep()
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