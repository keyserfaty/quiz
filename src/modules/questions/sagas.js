import { put, takeEvery, call } from 'redux-saga/effects'

import * as actions from './actions'

import { get } from '../../utils/api'

export function * fetchAllWorker () {
  yield put({ type: actions.fetchAllInit })

  const { res, error } = yield call(get, '?amount=10&difficulty=hard&type=boolean')

  if (!res || error) {
    yield put({ type: actions.fetchAllFailure, payload: { error } })
    return { error }
  }

  yield put({ type: actions.fetchAllSuccess, payload: { items: res.results } })

  return { res }
}

export function * fetchAllWatcher () {
  yield takeEvery(actions.fetchAll, fetchAllWorker)
}

export default [
  fetchAllWatcher
]
