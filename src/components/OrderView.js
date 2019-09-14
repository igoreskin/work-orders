import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

const OrderView = ({ order }) => {

  const [workerData, setWorkerData] = useState({
    worker: {}
  });

  const getWorker = async () => {
    try {
      const res = await axios.get(`https://www.hatchways.io/api/assessment/workers/${order.workerId}`);

      setWorkerData({
        worker: res.data.worker
      })
      // console.log(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getWorker();
  }, []);

  const { worker } = workerData; 
  // console.log(order)
  const date = new Date(Number(order.deadline));
  const deadline = date.toLocaleString();

  return (
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
  )
}

export default OrderView;
