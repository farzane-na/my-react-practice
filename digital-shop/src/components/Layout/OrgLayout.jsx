import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function OrgLayout({children}) {
  return (
    <div className='pt-2 sm:pt-4 lg:pt-5'>
        <Header />
        {children}
        <div className="wrapper">
          <Footer />  
        </div>
    </div>
  )
}
