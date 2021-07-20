import React from 'react'
import App from './App'
import { ARG_REDUX_PATH } from 'addon-redux'

export default {
  title: 'App',
  component: App,
  argTypes: {
    name1: {
      control: { type: 'text' },
      [ARG_REDUX_PATH]: 'todos.0.text'
    },
    completed1: {
      control: { type: 'boolean' },
      [ARG_REDUX_PATH]: 'todos.0.completed'
    },
    name2: {
      control: { type: 'text' },
      [ARG_REDUX_PATH]: 'todos.1.text'
    },
    completed2: {
      control: { type: 'boolean' },
      [ARG_REDUX_PATH]: 'todos.1.completed'
    },
    todo3: {
      control: { type: 'object' },
      [ARG_REDUX_PATH]: 'todos.2'
    }
  }
};

const Template = (args) => <App />;

export const All = Template.bind({});
All.args = {
  name1: 'fooo',
  completed1: false,
  name2: 'fooo',
  completed2: false,
  todo3: {
    id: 3,
    text: 'from object',
    completed: false
  }
};