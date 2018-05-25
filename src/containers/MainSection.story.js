import React from 'react'
import { storiesOf } from '@storybook/react'
import MainSection from './MainSection'
import { withRedux } from '../../.storybook/decorators'
import * as actions from '../actions'

const stories = storiesOf('MainSection', module)
stories.addDecorator(withRedux())
stories.add('default', () => <MainSection />)
