import { put, takeEvery, call } from 'redux-saga/effects'
// import { normalize } from '../../utils/helpers'

import * as actions from './actions'

import { get } from '../../utils/api'

export function * fetchAllWorker () {
  yield put({ type: actions.fetchAllInit })

  const { res, error } = yield call(get, 'shopping/categories')

  if (!res || error) {
    return yield put({ type: actions.fetchAllFailure, payload: { error } })
  }

  yield put({ type: actions.fetchAllSuccess, payload: { items: res.questions } })

  return { res }
}

export function * fetchAllWatcher () {
  yield takeEvery(actions.fetchAll, fetchAllWorker)
}

export default [
  fetchAllWatcher
]
