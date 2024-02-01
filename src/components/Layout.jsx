import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'


function Layout({children}) {
  return (
    <>  
      <Navbar />
      <Header />
      <div>{children}</div>
      <Footer />
    </>
    
  )
}

export default Layout