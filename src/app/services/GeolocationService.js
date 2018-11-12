/**
 * Returns a string of latitude and longitude
 */
export const geolocation = () => new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(
  position => resolve(`${position.coords.latitude}, ${position.coords.longitude}`),
  error => reject(error)
))
