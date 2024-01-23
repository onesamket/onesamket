import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import Toggle from './components/Toggle'

const RootLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            {/* theme  controller */}
            <Toggle />

        </div>
    )
}

export default RootLayout