import React from 'react'
import Header from '../Header/Header'

export default function OrgLayout({children}) {
  return (
    <div className='pt-2 sm:pt-4 lg:pt-5'>
        <Header />
        {children}
    </div>
  )
}
