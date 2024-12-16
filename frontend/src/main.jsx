import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MainRoutes } from './Routes';
import './eventus.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainRoutes />
  </StrictMode>,
);
