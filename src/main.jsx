import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto';
import './firebase/firebase.config.js'
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
