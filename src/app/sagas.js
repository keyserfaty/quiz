import { fork, all } from 'redux-saga/effects'

import modals from '../modules/modals'
import questions from '../modules/questions'

function startSagas (...sagas) {
  return function * rootSaga () {
    yield all(sagas.map(saga => fork(saga)))
  }
}

export default startSagas(
  ...modals.sagas,
  ...questions.sagas
)
