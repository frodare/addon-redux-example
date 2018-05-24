import React from 'react'
import { storiesOf } from '@storybook/react'
import VisibleTodoList from './VisibleTodoList'
import { withRedux } from '../../.storybook/decorators'

const stories = storiesOf('VisibleTodoList', module)
stories.addDecorator(withRedux())
stories.add('default', () => <VisibleTodoList />)
