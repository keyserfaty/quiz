import { connect } from 'react-redux'
import { withHooks } from 'utils/withHooks'

import * as actions from '../actions'
import * as selectors from '../selectors'

import List from '../components/List'

const mapStateToProps = state => ({
  questions: selectors.questions(state),
  status: selectors.status(state)
})

const mapDispatchToProps = (dispatch, props) => ({
  onMount: () => dispatch({ type: actions.fetchAll })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withHooks(List))
