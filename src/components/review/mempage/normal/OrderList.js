// import React from 'react'
import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "components/common/GlobalProvider";
import ReviewInsert from "components/review/components/ReviewInsert";

export default function OrderList() {
  const { globalAxios } = useContext(GlobalContext);

  
  const [orders, setOrders] = useState([]);

const ordersList = () => {
    globalAxios('/review/orderList', 'post', {}, res => {      
      if (res) {
        console.log(res);        
        setOrders(res);                   
        
      } else {
        alert("failed to ");
      }
    });
  }

  // useEffect(ordersList, []);

  


  function convertDate(longValue) {
    return new Date(longValue).toLocaleString();
  }
  useEffect(ordersList, []);

  return (
    <>
      <h1>주문목록</h1>      
      {/* {f()} */}
      
      <ReviewInsert/>
      
      {orders.map((order, index) =>{ 
          return  <div key={index}>            
              <p>{order.orderGroupSeq}</p>
              <p>{order.tableNum}</p>
              <p>{order.orderStatus}</p>
              <p>{convertDate(order.orderGroupRegdate)}</p>
            </div> 
          })}

 
      
    </>
  )
}
