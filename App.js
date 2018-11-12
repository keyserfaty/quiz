import React, { Component } from 'react'
import { Provider } from 'react-redux'

import configureStore from './src/app/configureStore'
import AppWithNavigationState from './src/app/App'

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
