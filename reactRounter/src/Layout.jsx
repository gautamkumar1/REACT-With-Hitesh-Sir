/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './compoents/Header/Header'
import{Outlet} from 'react-router-dom'
import Footer from './compoents/Footer/Footer'

function Layout() {
  return (
    <>
        <Header/>

        <Outlet/>

        <Footer/>
        
    </>
  )
}

export default Layout