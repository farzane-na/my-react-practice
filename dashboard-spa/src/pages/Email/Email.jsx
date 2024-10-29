import React from 'react'
import "./Email.css"
import EmailTable from '../../components/EmailTable/EmailTable'

export default function Email() {
  return (
    <div className="email">
        <h2 className="email__title">ایمیل ها</h2>
        <EmailTable />
    </div>
  )
}
