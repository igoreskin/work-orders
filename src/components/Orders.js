import React from 'react';
import OrderView from './OrderView';

const Orders = ({ orderData}) => {

  const renderOrders = orderData.map((order) => <OrderView key={order.id} order={order} />)

  return (
    <div className='orders'>
      { renderOrders }
    </div>
  )
}

export default Orders
