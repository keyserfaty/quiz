import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

console.tron = Reactotron

Reactotron
  .configure()
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect()
