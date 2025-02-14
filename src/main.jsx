import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import AuthProvider from './context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    {/* <App /> */}

    {/* app ne wrap kari do AuthProvider ma */}

    <AuthProvider>
      <App/>
    </AuthProvider>
  </StrictMode>,
)
