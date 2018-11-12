import { combineReducers } from 'redux'

import AppNavigator from './AppRouter'

import alerts from '../modules/alerts'
import questions from '../modules/questions'

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams())

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}

const rootReducer = combineReducers({
  nav: navReducer,
  [alerts.constants.NAMESPACE]: alerts.reducer,
  [questions.constants.NAMESPACE]: questions.reducer
})

export default rootReducer
