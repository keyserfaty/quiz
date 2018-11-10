import { combineReducers } from 'redux'

import AppNavigator from './AppRouter'

import modals from '../modules/modals'
import questions from '../modules/questions'

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams())

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}

const rootReducer = combineReducers({
  nav: navReducer,
  [modals.constants.NAMESPACE]: modals.reducer,
  [questions.constants.NAMESPACE]: questions.reducer
})

export default rootReducer
