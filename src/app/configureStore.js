import { applyMiddleware, compose } from 'redux'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import Reactotron from 'reactotron-react-native'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

export default function configure (initialState) {
  const sagaMonitor = Reactotron.createSagaMonitor()
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

  const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
  )

  const reduxMiddleware = [
    sagaMiddleware,
    middleware
  ]

  // Only includes in DEV mode
  // if (__DEV__) {
  //   const freeze = require('redux-freeze');
  //   reduxMiddleware.push(freeze);
  // }

  const enhancers = compose(
    applyMiddleware(...reduxMiddleware)
  )

  const store = Reactotron.createStore(
    rootReducer,
    enhancers
  )

  sagaMiddleware.run(rootSaga)

  return store
}
