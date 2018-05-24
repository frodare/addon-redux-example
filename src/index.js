import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import 'todomvc-app-css/index.css'
import withReduxEnhancer from 'addon-redux/enhancer'

export const store = createStore(reducer, {}, withReduxEnhancer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
