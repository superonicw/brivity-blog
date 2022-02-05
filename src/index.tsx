import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { API_BASE_URL, API_TOKEN_KEY } from 'config/base'
import AppRoutes from 'routes'
import { AppProvider } from 'store/providers'
import reportWebVitals from './reportWebVitals'
import './styles/index.scss'

axios.defaults.baseURL = API_BASE_URL

axios.interceptors.request.use(config => {
  const token = localStorage.getItem(API_TOKEN_KEY)

  const newConfig = Object.assign(
    {},
    config,
    token && { headers: { Authorization: token } },
  )

  return newConfig
})

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
