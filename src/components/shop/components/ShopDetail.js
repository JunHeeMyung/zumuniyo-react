import React, { useState, useEffect, useContext } from "react";

import { GlobalContext } from "components/common/GlobalProvider";

export default function ShopDetail(props) {

  const { logined, memNick, memType, globalAxios } = useContext(GlobalContext);

  const [shopseq, setShopseq] = useState(props.shopseq);
  const [shoplist, setShoplist] = useState([]);
  const [shop, setShop] = useState({});

  const shopSelect = () => {
    globalAxios(`/shop/shopListByseq/${shopseq}`, 'get', {}, res => {
      if (res) {
        console.log(res);
        setShop(res);
        // setShoplist(res);
      } else {
        alert("failed to");
      }
    });
  }

  useEffect(shopSelect, []);


  return (
    <div>
      <h1>shopInfo- 짧은 소개</h1>
      {shop.shopInfo}

      <h1>ShopDetail-매장상세 정보</h1>
      {shop.shopDetail}

      <h1>사장님 한마디</h1>
      {shop.shopNotice}

      <h1>매장 주소</h1>
      {/* {shop.location} */}
      {/* {shop.location.locAddr} */}
      {shop.shopAddrDetail}

      <h1>매장 로고</h1>
      {shop.shopLogo}
    </div>
  )
}
