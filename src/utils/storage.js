import { AsyncStorage } from 'react-native'

export const setStorage = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, value)
  } catch (error) {
    return error
  }
}

export const getStorage = async (key) => {
  try {
    return await AsyncStorage.getItem(key)
  } catch (error) {
    return error
  }
}

export const removeStorage = async (key) => {
  try {
    return await AsyncStorage.removeItem(key)
  } catch (error) {
    return error
  }
}

export const getAllStorage = () => {
  AsyncStorage.getAllKeys((err, keys) => {
    if (err) return err

    AsyncStorage.multiGet(keys, (err, stores) => {
      if (err) return err

      stores.map((result, i, store) => {
        const key = store[i][0]
        const value = store[i][1]
        console.log(key, value)
      })
    })
  })
}
