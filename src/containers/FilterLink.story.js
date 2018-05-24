import React from 'react'
import { storiesOf } from '@storybook/react'
import FilterLink from './FilterLink'
import { withRedux } from '../../.storybook/decorators'

const stories = storiesOf('FilterLink', module)
stories.addDecorator(withRedux())
stories.add('default', () => <FilterLink filter='All'>Link Label</FilterLink>)
