import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Cardtsx from './ui/components/Card.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Cardtsx></Cardtsx>
  </React.StrictMode>,
)
