import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from './Header'
import { withRedux } from '../../.storybook/decorators'

const stories = storiesOf('Header', module)
stories.addDecorator(withRedux())
stories.add('default', () => <Header />)
