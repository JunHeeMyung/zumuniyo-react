// import React from 'react'
import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "components/common/GlobalProvider";

export default function Test123() {

  const { logined, memNick, memType, globalAxios } = useContext(GlobalContext);

  const [shoplist, setShoplist] = useState([]);

  const shopSelect = () => {
    globalAxios('/shop/shopList', 'get', {}, res => {
      if (res) {
        console.log(res);
        setShoplist(res);
      } else {
        alert("failed to");
      }
    });
  }
  function convertDate(longValue) {
    return new Date(longValue).toLocaleString();
  }

  useEffect(shopSelect, []);


  return (
    <div>
      <h1>테스트123</h1>


      {shoplist.map((shop, index) => {
        return (
          <div key={index}>
            <p>{shop.shopSeq}</p>
            <p>{shop.shopName}</p>
            <p>{shop.shopInfo}</p>
            <p>{convertDate(shop.shopRegdate)}</p>
            <p>{shop.shopStatus}</p>
          </div>
        )

      })}



    </div>
  )
}
