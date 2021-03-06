import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import Alert from '../modules/alerts/components'

import RootNavigator from './AppRouter'
import NavigationService from './services/NavigationService'

import './configs'

class App extends Component {
  render () {
    const addListener = createReduxBoundAddListener('root')

    return (
      <View style={{ flex: 1 }}>
        <RootNavigator
          screenProps={this.props}
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
          navigation={{
            dispatch: this.props.dispatch,
            state: this.props.nav,
            addListener
          }}
        />
        <Alert />
      </View>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  nav: PropTypes.object
}

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(
  mapStateToProps
)(App)
