import { NAMESPACE } from './constants'

export const questions = state => state[NAMESPACE].items
export const status = state => state[NAMESPACE].status
export const error = state => state[NAMESPACE].error
