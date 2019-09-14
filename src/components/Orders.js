import React, { Fragment } from 'react';
import OrderView from './OrderView';

const Orders = ({ orderData}) => {

  const renderOrders = orderData.map((order) => <OrderView key={order.id} order={order} />)

  const handleOnClick = e => {
    console.log(e.target.value)
  }

  return (
    <Fragment>
      <div className='filter'>
        <input placeholder={`Filter by worker name... `} onClick={e => handleOnClick(e)}/>
        <i className="fas fa-search"></i>
      </div>
      <div className='orders'>
        { renderOrders }
      </div>
    </Fragment>
  )
}

export default Orders
