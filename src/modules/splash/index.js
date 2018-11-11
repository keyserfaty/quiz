import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import { styles } from './statics/styles'

class SplashScreen extends Component {
  handleSplashLogic = async () => {
    // Should handle token presence here if it was necessary
    this.props.navigation.navigate('Questions', {
      transition: 'default'
    })
  }

  componentDidMount () {
    this.handleSplashLogic()
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text>Questions!</Text>
        </View>
      </View>
    )
  }
}

SplashScreen.propTypes = {
  navigation: PropTypes.object
}

export default SplashScreen
