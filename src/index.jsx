import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { history } from './history'
import { store } from './store'
import { App } from './app/App'

import { GlobalStyle } from './styled'
import 'antd/dist/antd.css'


ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <GlobalStyle/>
      <App/>
    </Provider>
  </Router>,
  document.getElementById('root')
)