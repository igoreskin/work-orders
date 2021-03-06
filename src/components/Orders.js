import React, { Fragment, useState } from 'react';
import OrderView from './OrderView';

const Orders = ({ orderData}) => {

  const [name, setName] = useState('');

  const handleOnChange = e => {
    setName(e.target.value)
  }

  const renderOrders = orderData.map((order) => <OrderView key={order.id} order={order} name={name} />)

  return (
    <Fragment>
      <div className='filter'>
        <input placeholder={`Filter by worker name... `} onChange={e => handleOnChange(e)}/>
        <i className="fas fa-search"></i>
      </div>
      <div className='orders'>
        { renderOrders }
      </div>
    </Fragment>
  )
}

export default Orders;
