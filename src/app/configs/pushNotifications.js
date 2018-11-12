import PushNotification from 'react-native-push-notification'
import { PushNotificationIOS } from 'react-native'

PushNotification.configure({
  onRegister (token) {},

  onNotification (notification) {
    if (notification.foreground) {
      PushNotification.presentLocalNotification({
        message: notification.message
      })
    }

    // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
    notification.finish(PushNotificationIOS.FetchResult.NoData)
  },

  senderID: ''
})
