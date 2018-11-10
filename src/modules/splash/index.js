import React, { Component } from 'react'
import { View, AsyncStorage, Text } from 'react-native'

import { styles } from './statics/styles'

class SplashScreen extends Component {
  handleSplashLogic = async () => {
    const token = await AsyncStorage.getItem('token')
    
    if (!token) {
      return this.props.navigation.navigate('Auth', {
        transition: 'default'
      })
    } else {
      return this.props.navigation.navigate('Questions', {
        transition: 'default'
      })
    }
  }

  componentDidMount () {
    this.handleSplashLogic()
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text>Splash</Text>
        </View>
      </View>
    )
  }
}

export default SplashScreen
