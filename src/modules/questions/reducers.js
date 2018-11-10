import { handleActions } from 'redux-actions'

import * as actions from './actions'

const initialState = {
  status: 'init',
  error: '',
  items: []
}

const reducer = handleActions({
  [actions.fetchAllInit]: state => ({
    ...state,
    status: 'pending'
  }),

  [actions.fetchAllSuccess]: (state, action) => ({
    ...state,
    status: 'success',
    items: action.payload.items
  }),

  [actions.fetchAllFailure]: (state, action) => ({
    ...state,
    status: 'failure',
    error: action.payload.error
  })

}, initialState)

export default reducer
