import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { BreadcrumbsProvider } from 'react-breadcrumbs-dynamic'

import configureStore from './redux/configureStore'

import App from './pages/App'

const store = configureStore()

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <BreadcrumbsProvider>
        <App />
      </BreadcrumbsProvider>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
