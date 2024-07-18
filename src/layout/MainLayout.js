import React from 'react'
import Header from './Header'
import Footer from './Footer'

import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <React.Fragment>
      <Header />
     <Outlet/>
      <Footer/>
    </React.Fragment>
  )
}

export default MainLayout