import React from 'react'

import Question from './Question'

import { parseBool } from '../../../helpers'

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

    this.setState({
      questionNum: questionNum + 1
    })
    
    if (this.props.onAddResponse) {
      this.props.onAddResponse(response)
    }
    
    if (questions.length - 1 === questionNum) {  
      if (this.props.onNextStep) {
        this.props.onNextStep()
      }
    }
  }

  render () {
    const { questions } = this.props
    const { questionNum } = this.state

    const question = questions[questionNum]
    
    return (
      <Question
        {...this.props}
        count={questionNum + 1}
        category={question.category}
        question={question.question}
        correct={parseBool(question.correct_answer)}
        onNextQuestion={this.onNextQuestion}
      />
    )
  }
}

export default QuestionsContainer