import React from 'react'
import { storiesOf } from '@storybook/react'
import MainSection from './MainSection'
import { withRedux } from '../../.storybook/decorators'

const stories = storiesOf('MainSection', module)
stories.addDecorator(withRedux({}, [{
  name: 'Add Todo',
  action: {
    type:'ADD_TODO',
    text:'mow the yard'
  }
}]))
stories.add('default', () => <MainSection />)
