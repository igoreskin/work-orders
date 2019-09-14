import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

import Orders from './Orders';



const MainContainer = () => {

  const [orderData, setOrderData] = useState({
    workOrderData: []
  });

  const getWorkOrders = async () => {
    try {
      const res = await axios.get('https://www.hatchways.io/api/assessment/work_orders');

      setOrderData({
        workOrderData: res.data.orders
      })
      console.log(res.data);
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getWorkOrders();
  }, [])

  const { workOrderData } = orderData;


  return (
    <div>
      <Orders orderData={workOrderData} />
    </div>
  )
}

export default MainContainer;
