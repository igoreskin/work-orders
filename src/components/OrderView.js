import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

const OrderView = ({ order, name }) => {

  useEffect(() => {
    getWorker();
  }, [])

  const [worker, setWorkerData] = useState({});

  const getWorker = async () => {
    try {
      const res = await axios.get(`https://www.hatchways.io/api/assessment/workers/${order.workerId}`);

      setWorkerData(res.data.worker);

    } catch (error) {
      console.log(error.message)
    }
  }

  const date = new Date(Number(order.deadline));
  const deadline = date.toLocaleString();

  return (
    <Fragment>
    {
      (name === '' || name === worker.name) && 
    <Fragment>
      <div className='order-view'>
        <p><strong>{order.name}</strong></p>
        <p>{order.description}</p>
        <div className='worker'>
          <img className='image' src={worker.image} alt=""/>
          <div className='worker-info'>
            <p>{worker.name}</p>
            <p>{worker.companyName}</p>
            <p>{worker.email}</p>
          </div>
        </div>
        <p className='deadline'>{deadline}</p>
      </div>
      </Fragment>}
    </Fragment>
  )
}

export default OrderView;
