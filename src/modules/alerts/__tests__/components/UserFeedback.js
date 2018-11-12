import React from 'react'
import UserFeedback from '../../components/UserFeedback/UserFeedback'

import Shallow from 'react-test-renderer/shallow'

const renderer = new Shallow()

test('Should render success', () => {
  const props = {
    data: {
      type: 'success',
      msg: 'some text'
    },
    onCloseAlert: () => {}
  }

  const component = renderer.render(<UserFeedback {...props} />)
  expect(component).toMatchSnapshot()
})

test('Should render failure', () => {
  const props = {
    data: {
      type: 'failure',
      msg: 'some text'
    },
    onCloseAlert: () => {}
  }

  const component = renderer.render(<UserFeedback {...props} />)
  expect(component).toMatchSnapshot()
})
