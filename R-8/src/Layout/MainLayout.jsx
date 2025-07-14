import React from 'react'
import Footer from '../Layout/Footer'
import Header from '../Layout/Header'
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout