import React from 'react'
import ReactDOM from 'react-dom'
import i18next from 'i18next'
import { Router } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { resources } from './i18n'
import { history } from './history'
import { store } from './store'
import { App } from './app/App'

import { GlobalStyle } from './styled'
import 'antd/dist/antd.css'


i18next.init({ resources, lng: 'en' })

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <GlobalStyle/>
        <App/>
      </I18nextProvider>
    </Provider>
  </Router>,
  document.getElementById('root')
)
