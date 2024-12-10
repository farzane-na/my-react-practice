import React from 'react'
import Header from '../Header/Header'

export default function OrgLayout({children}) {
  return (
    <div>
        <Header />
        {children}
    </div>
  )
}
