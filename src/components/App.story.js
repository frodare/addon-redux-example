import React from 'react'
import { storiesOf } from '@storybook/react'
import App from './App'
import { withRedux } from '../../.storybook/decorators'
import * as actions from '../actions'

const cannedActions = [
  {name: 'addTodo', action: actions.addTodo('Test Todo')},
  {name: 'completeAllTodos', action: actions.completeAllTodos()},
  {name: 'clearCompleted', action: actions.clearCompleted()}
]

const stories = storiesOf('App', module)
stories.addDecorator(withRedux({}, cannedActions))
stories.add('default', () => <App />)
