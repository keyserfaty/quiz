import { createSelector } from 'reselect'
import { NAMESPACE } from './constants'

export const questions = state => state[NAMESPACE].items
export const responses = state => state[NAMESPACE].responses
export const status = state => state[NAMESPACE].status
export const error = state => state[NAMESPACE].error

export const getCorrectResponses = createSelector(
  responses,
  list => list
    .reduce((sum, next) => sum + next.correct, 0)
)