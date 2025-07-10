import React from 'react'

import Footer from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import NavBar from '../Navbar/NavBar/NavBar.jsx'

export default function Layout() {
  return <>
<NavBar/>

<div className="" dir="rtl">



  <Outlet/>
</div>


  
  <Footer />

  
  </>
}
