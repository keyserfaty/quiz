import { fork, all } from 'redux-saga/effects'

import alerts from '../modules/alerts'
import questions from '../modules/questions'

function startSagas (...sagas) {
  return function * rootSaga () {
    yield all(sagas.map(saga => fork(saga)))
  }
}

export default startSagas(
  ...alerts.sagas,
  ...questions.sagas
)
