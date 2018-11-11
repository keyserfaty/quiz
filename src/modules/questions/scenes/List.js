import { connect } from 'react-redux'
import { withHooks } from '../../../hooks/withHooks'

import * as actions from '../actions'
import * as selectors from '../selectors'

import { alerts } from '../constants'

import List from '../components/List'

const mapStateToProps = state => ({
  questions: selectors.questions(state),
  responses: selectors.responses(state),
  status: selectors.status(state),
  correctResponses: selectors.getCorrectResponses(state)
})

const mapDispatchToProps = (dispatch, props) => {
  const fetchQuestions = () => dispatch({ type: actions.fetchAll })

  return {
    onMount: () => fetchQuestions(),
    onForeground: () => dispatch(alerts.success),
    onDisconnect: () => dispatch(alerts.failure),
    onConnect: () => {
      dispatch(alerts.success)
      fetchQuestions()
    },
    onfetchQuestions: () => fetchQuestions(),
    onAddResponse: response => dispatch({ type: actions.addResponse, payload: { response } }),
    onCleanResponses: () => dispatch({ type: actions.cleanResponses })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withHooks(List))
