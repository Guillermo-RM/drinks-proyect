import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId : 'GTM-W8X45GSQ'
}
TagManager.initialize(tagManagerArgs)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
