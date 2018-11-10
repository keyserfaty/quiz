import { call } from 'redux-saga/effects'
import { expectSaga } from 'redux-saga-test-plan'

import { get } from '../../../utils/api'

import { fetchAllWorker } from '../sagas'
import * as actions from '../actions'

it('Fetches a list of questions', () => {
  const res = {}

  return expectSaga(fetchAllWorker)
    .put({
      type: actions.fetchAllInit
    })
    .provide([[call(get, `shopping/categories`), { res }]])
    .put({
      type: actions.fetchAllSuccess,
      payload: { items: res.categories }
    })
    .dispatch({ type: actions.fetchAll })
    .silentRun()
})

it('Fetches a list of questions with an error', () => {
  const error = { msg: 'some error' }

  return expectSaga(fetchAllWorker)
    .put({
      type: actions.fetchAllInit
    })
    .provide([[call(get, `shopping/categories`), { error }]])
    .put({
      type: actions.fetchAllFailure,
      payload: { error }
    })
    .run()
})
