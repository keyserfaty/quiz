import firebase from 'react-native-firebase'

export const firebaseInit = async () => {
  const hasPermissions = await firebase.messaging().hasPermission()

  if (!hasPermissions) {
    const gavePermission = await firebase.messaging().requestPermission()

    if (!gavePermission) {
      return console.tron.log('Hasn\'t authorized')
    }
  }

  return firebase.messaging().getToken()
}

export default async (message) => {
  console.tron.log(message)
  return Promise.resolve()
}
