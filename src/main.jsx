import React from 'react'
import ReactDOM from 'react-dom/client'
import 'modern-normalize'
import App from './components/App/App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
          <App />
          <Toaster />
    </Provider>,
  </React.StrictMode>
)