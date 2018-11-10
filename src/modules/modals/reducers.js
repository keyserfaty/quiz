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
  [actions.openModal]: (state, action) => ({
    ...state,
    type: types[action.payload.type],
    onConfirm: action.payload.onConfirm,
    onCancel: action.payload.onCancel,
    data: action.payload.data
  }),

  [actions.closeModal]: (state, action) => ({
    ...initialState
  })

}, initialState)

export default reducer
