import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/main.scss'
import {Routers} from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routers/>
  </React.StrictMode>,
)
