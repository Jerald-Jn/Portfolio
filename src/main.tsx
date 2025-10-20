import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { StorexContextProvider } from './components/Context/storeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StorexContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </StorexContextProvider>
  </React.StrictMode>
)
