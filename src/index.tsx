import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material'

async function enableMocking() {
  const { serviceWorker } = await import('./mocks/browser')

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return serviceWorker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

enableMocking().then(() => {
  root.render(
    <GoogleOAuthProvider clientId='766274348525-jmgmv2ak0758jouokhijo82um6p9spq0.apps.googleusercontent.com'>
      <React.StrictMode>
        <StyledEngineProvider injectFirst>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </StyledEngineProvider>
      </React.StrictMode>
    </GoogleOAuthProvider>
  )
})
