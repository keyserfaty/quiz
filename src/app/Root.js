import React, { Component } from 'react'
import { Provider } from 'react-redux'

import AppWithNavigationState from './App'

import configureStore from './configureStore'
const store = configureStore()

class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

export default Root
