import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

console.tron = Reactotron

Reactotron
  .configure({ lan: 'exp://10.0.0.228:19000' })
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect()
