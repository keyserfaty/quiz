import List from './scenes/List'

import reducer from './reducers'
import sagas from './sagas'

import * as selectors from './selectors'
import * as constants from './constants'
import * as actions from './actions'

export default {
  actions,
  constants,
  selectors,
  reducer,
  sagas,
  scenes: {
    List
  }
}
