import React from 'react'
import Hero from './components/hero'
import Nav from './components/nav'
import { Routes, Route } from 'react-router-dom'
import Profile from './components/profile'

function App() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path='/' element={<Hero />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>

        </div >
    )
}

export default App