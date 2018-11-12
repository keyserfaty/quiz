import { handleActions } from 'redux-actions'

import * as actions from './actions'
import types from './components/types'

const initialState = {
  type: '',
  data: {},
  onConfirm: '',
  onCancel: ''
}

const reducer = handleActions({
  [actions.openAlert]: (state, action) => ({
    ...state,
    type: types[action.payload.type],
    onConfirm: action.payload.onConfirm,
    onCancel: action.payload.onCancel,
    data: action.payload.data
  }),

  [actions.closeAlert]: (state, action) => ({
    ...initialState
  })

}, initialState)

export default reducer
