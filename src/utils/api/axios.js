import Axios from 'axios'
import { AsyncStorage } from 'react-native'

import NavigationService from '../../app/services/NavigationService'

import urls from '../../app/constants.json'

const METHODS = ['get', 'put', 'post', 'patch', 'delete']

export const axios = async (method, url, data) => {
  const token = await AsyncStorage.getItem('token')

  return Axios
    .create({
      baseURL: urls.api + '/',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      }
    })
    .request({
      transformResponse: data =>
        handleUnauthorized(JSON.parse(data)),
      url,
      method,
      data
    })
}

/**
 * I'm returning an array of functions for each method I defined
 * earlier in the 'METHODS' variable.
 * @type {Array}
 */

export const axiosConstructor = METHODS
  .map((method) =>
  /**
   * This is the function that handles the request.
   * If you want to send extra things to the Axios function that
   * handles requests this is the place it should go.
   * @param path
   * @param data
   */
    (path, data) =>
      axios(method, path, data)
        .then(res => ({res: res.data}))
        .catch(error => ({error: error.response}))
  )

const handleUnauthorized = response => {
  if (response.status === 401 || response.message === 'Not Authorized') {
    AsyncStorage.clear()

    return NavigationService.navigate('Auth', {
      transition: 'default'
    })
  }

  return response
}