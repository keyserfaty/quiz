import React from 'react'

import Welcome from '../Steps/Welcome'
import Question from '../Steps/Question'
import Results from '../Steps/Results'

const List = props => {
  const { step } = props

  switch (step) {
    case 0: 
      return <Welcome {...props} />

    case 1:
      return <Question {...props} />

    case 2:
      return <Results {...props} />

    default:
      return <Welcome {...props} />
  }
}

export default List