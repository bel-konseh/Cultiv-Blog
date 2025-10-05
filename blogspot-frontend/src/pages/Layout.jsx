

// Please do not make any changes to this file
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
//please do not make any changes to this file

function Layout() {
  return (
    <>
      {/* please do not make any changes to this file */}
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
