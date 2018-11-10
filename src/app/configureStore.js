import { applyMiddleware, compose, createStore } from 'redux'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

export default function configure (initialState) {
  const sagaMiddleware = createSagaMiddleware()

  const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
  )

  const reduxMiddleware = [
    sagaMiddleware,
    middleware
  ]

  const enhancers = compose(
    applyMiddleware(...reduxMiddleware)
  )

  const store = createStore(
    rootReducer,
    enhancers
  )

  sagaMiddleware.run(rootSaga)

  return store
}
