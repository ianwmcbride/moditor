import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import './vars.css';
import './index.css';

import Games from './pages/Games.tsx'

console.log(window.location.pathname)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={Games}/>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
