import React from 'react'
import ReactDOM from 'react-dom'
import './styles/global.scss'
import App from './App'
import DataProvider from './redux/store'
import "./i18n"

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

