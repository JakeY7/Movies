/**
 * Mocking client-server processing
 */
import movies from './movies.json'
console.log(movies)

const TIMEOUT = 100

export default {
  getLikedList: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  getRecommendList: ( cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
