import React from 'react'
import "./Orders.css"
import OrdersTable from '../../components/OrdersTable/OrdersTable'

export default function Orders() {
  return (
    <div className="orders">
        <h2 className="orders__title">سفارش ها</h2>
        <OrdersTable />
    </div>
  )
}
