import * as alertActions from '../alerts/actions'

export const NAMESPACE = 'questions'

export const alerts = {
  success: { 
    type: alertActions.openAlert, 
    payload: { 
      type: 'userFeedback', 
      data: {
        type: 'success',
        msg: "Welcome back! Let's continue! 🌈" 
      }
    } 
  },
  failure: { 
    type: alertActions.openAlert, 
    payload: { 
      type: 'userFeedback', 
      data: {
        type: 'failure',
        msg: "You've lost connection 😔" 
      }
    } 
  } 
}