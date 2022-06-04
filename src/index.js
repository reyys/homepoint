import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.js'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AddressProvider from './context/context.js'

const root = createRoot(document.querySelector("#root"));

root.render(
    <AddressProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AddressProvider>
)