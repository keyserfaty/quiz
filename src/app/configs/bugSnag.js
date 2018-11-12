import { Client } from 'bugsnag-react-native'
import { BUGSNAG_API_KEY } from 'react-native-dotenv' // eslint-disable-line

export const bugsnag = new Client(BUGSNAG_API_KEY)
