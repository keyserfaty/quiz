import * as selectors from '../selectors'
import { NAMESPACE } from '../constants'

import questions from '../__mocks__/questions'

describe('Should return a selector based on a state object', () => {
  const state = {
    [NAMESPACE]: {
      status: 'init',
      error: '',
      items: questions
    }
  }

  it('Should return question status', () => {
    const value = selectors.status(state)
    const expected = 'init'

    expect(value).toEqual(expected)
  })

  it('Should return question error', () => {
    const value = selectors.error(state)
    const expected = ''

    expect(value).toEqual(expected)
  })

  it('Should return question items', () => {
    const value = selectors.questions(state)
    const expected = [
      {
        'category': 'History',
        'type': 'boolean',
        'difficulty': 'hard',
        'question': 'Joseph Stalin&#039;s real name was Ioseb Bessarionis dze Dzugashvili.',
        'correct_answer': 'True',
        'incorrect_answers': [
          'False'
        ]
      },
      {
        'category': 'Entertainment: Video Games',
        'type': 'boolean',
        'difficulty': 'hard',
        'question': 'In the game &quot;Melty Blood Actress Again Current Code&quot;, you can enter Blood Heat mode in Half Moon style.',
        'correct_answer': 'False',
        'incorrect_answers': [
          'True'
        ]
      },
      {
        'category': 'Science & Nature',
        'type': 'boolean',
        'difficulty': 'hard',
        'question': 'It was once believed that injecting shark cartilage into people would prevent them from contracting cancer.',
        'correct_answer': 'True',
        'incorrect_answers': [
          'False'
        ]
      }
    ]

    expect(value).toEqual(expected)
  })
})