import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import PlayerContextProvider from './contexts/playerContext/PlayerContext.jsx';
import SessionContextProvider from './contexts/sessionContext/SessionContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <SessionContextProvider>
          <PlayerContextProvider>
            <App />
          </PlayerContextProvider>
        </SessionContextProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>
);
