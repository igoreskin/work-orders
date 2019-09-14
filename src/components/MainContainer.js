import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Orders from './Orders';

const MainContainer = () => {

  const [orderData, setOrderData] = useState([]);

  const getWorkOrders = async () => {
    try {
      const res = await axios.get('https://www.hatchways.io/api/assessment/work_orders');

      setOrderData(res.data.orders.sort((el1, el2) => Number(el1.deadline) - Number(el2.deadline)));
      console.log(res.data.orders);
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getWorkOrders();
  }, []);

  const [earliest, setEarliest] = useState(true);

  const handleOnClick = () => {
    setEarliest(!earliest);
    console.log(earliest)
  }

  return (
    <Fragment>
      <div className='toggle'>
        <div className='earliest-latest'>Earliest first&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <label className="switch">
          <input type="checkbox" onClick={handleOnClick}/>
          <span className="slider round"></span>
        </label>
        <div className='earliest-latest'>&nbsp;&nbsp;&nbsp;&nbsp;Latest first</div>
      </div>  
    
      <div> { earliest ?
        <Orders orderData={orderData.sort((el1, el2) => Number(el1.deadline) - Number(el2.deadline))} /> : 
        <Orders orderData={orderData.sort((el1, el2) => Number(el2.deadline) - Number(el1.deadline))} />
        }
      </div>
    </Fragment>
  )
}

export default MainContainer;
