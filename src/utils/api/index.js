import { axiosConstructor } from './axios'

/**
 * I'm using destructuring to avoid duplicating multiple functions that do
 * the same thing for different methods.
 * Destructuring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */
export const [get, put, post, patch, del] = axiosConstructor
