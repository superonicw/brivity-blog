import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { API_BASE_URL } from 'config/base'
import AppRoutes from 'routes'
import { AppProvider } from 'store/providers'
import reportWebVitals from './reportWebVitals'
import './index.scss'

axios.defaults.baseURL = API_BASE_URL

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
