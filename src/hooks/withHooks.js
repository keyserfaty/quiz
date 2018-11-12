import React from 'react'
import PropTypes from 'prop-types'
import { AppState, NetInfo } from 'react-native'

export const withHooks = ComposedComponent => {
  class MountHooksHOC extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        appState: AppState.currentState
      }
    }
    
    componentDidMount () {
      if (this.props.onMount) this.props.onMount(this.props.onMountParams)
      AppState.addEventListener('change', this._handleAppStateChange)

      NetInfo.isConnected.addEventListener('connectionChange', this._handleConnectionChange)
    }

    componentWillUnmount () {
      if (this.props.onUnmount) this.props.onUnmount(this.props.onUnmountParams)
      AppState.removeEventListener('change', this._handleAppStateChange)
    }

    _handleAppStateChange = (nextAppState) => {
      if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
        if (this.props.onForeground) this.props.onForeground()
      } else {
        if (this.props.onBackground) this.props.onBackground()
      }

      this.setState({
        appState: nextAppState
      })
    }

    _handleConnectionChange = (isConnected) => {
      if (isConnected) {
        if (this.props.onConnection) this.props.onConnection()
      } else {
        if (this.props.onDisconnection) this.props.onDisconnection()
      }
    }

    render () {
      const { onMount, onUnmount, onConnection, onDisconnection, onForeground, onBackground, ...other } = this.props; // eslint-disable-line
      return <ComposedComponent { ...other } />
    }
  }

  MountHooksHOC.propTypes = {
    onMount: PropTypes.func,
    onUnmount: PropTypes.func,
    onMountParams: PropTypes.any,
    onConnection: PropTypes.func,
    onDisconnection: PropTypes.func,
    onForeground: PropTypes.func,
    onBackground: PropTypes.func,
    onUnmountParams: PropTypes.any
  }

  return MountHooksHOC
}
