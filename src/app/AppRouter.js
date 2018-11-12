import { createStackNavigator } from 'react-navigation'

import splash from '../modules/splash'
import questions from '../modules/questions'

const RootNavigator = createStackNavigator({
  Home: { screen: splash },
  Questions: { screen: questions.scenes.List }
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false
  }
})

export default RootNavigator
