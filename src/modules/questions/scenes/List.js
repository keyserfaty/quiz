import { connect } from 'react-redux'
import { withHooks } from '../../../hooks/withHooks'

import * as actions from '../actions'
import * as selectors from '../selectors'

import List from '../components/List'

const mapStateToProps = state => ({
  questions: selectors.questions(state),
  status: selectors.status(state)
})

const mapDispatchToProps = (dispatch, props) => {
  const fetchQuestions = () => dispatch({ type: actions.fetchAll })

  return {
    onMount: () => fetchQuestions(),
    onfetchQuestions: () => fetchQuestions()
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withHooks(List))
