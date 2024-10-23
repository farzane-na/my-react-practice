import React from 'react'
import './Users.css'
import UsersTable from "./../../components/UsersTable/UsersTable"

export default function Users() {
  return (
    <div className="users">
      <h2 className="users-title">کاربران</h2>
      <UsersTable />
    </div>
  )
}
