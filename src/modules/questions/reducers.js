import { handleActions } from 'redux-actions'

import * as actions from './actions'

const initialState = {
  status: 'init',
  error: '',
  items: [],
  responses: []
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
  }),

  [actions.addResponse]: (state, action) => ({
    ...state,
    responses: [
      ...state.responses,
      action.payload.response
    ]
  }),

  [actions.cleanResponses]: (state, action) => ({
    ...state,
    responses: []
  })

}, initialState)

export default reducer
