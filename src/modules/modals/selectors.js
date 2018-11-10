import { NAMESPACE } from './constants'

export const type = state => state[NAMESPACE].type
export const data = state => state[NAMESPACE].data
export const onConfirm = state => state[NAMESPACE].onConfirm
export const onCancel = state => state[NAMESPACE].onCancel
