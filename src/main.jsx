import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./Styles/main.css"
import { Provider } from 'react-redux'
import store from './Store/store.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
