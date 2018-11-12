import { call } from 'redux-saga/effects'
import { expectSaga } from 'redux-saga-test-plan'

import { get } from '../../../utils/api'

import { fetchAllWorker } from '../sagas'

import * as actions from '../actions'

it('Fetches a list of questions', () => {
  const res = {
    response_code: 0,
    results: [
      {
        status: true
      }
    ]
  }

  const error = undefined

  return expectSaga(fetchAllWorker)
    .put({
      type: actions.fetchAllInit
    })
    .provide([[call(get, '?amount=10&difficulty=hard&type=boolean'), { res, error }]])
    .put({
      type: actions.fetchAllSuccess,
      payload: { items: res.results }
    })
    .dispatch({ type: actions.fetchAll })
    .returns({ res })
    .run()
})

it('Fetches a list of questions with an error', () => {
  const res = undefined
  const error = { msg: 'some error' }

  return expectSaga(fetchAllWorker)
    .put({
      type: actions.fetchAllInit
    })
    .provide([[call(get, '?amount=10&difficulty=hard&type=boolean'), { res, error }]])
    .put({
      type: actions.fetchAllFailure,
      payload: { error }
    })
    .dispatch({ type: actions.fetchAll })
    .returns({ error })
    .run()
})
