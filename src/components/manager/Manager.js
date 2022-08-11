import React  from "react";
import { Route, Routes } from "react-router-dom";
import QRManager from "components/manager/QRManager";
import CouponManager from "components/manager/CouponManager";

const Manager = ()=> {





  const getManagerListResult = () => {

  }

  const getManagerList = () => {
    //globalAxios('/main/','get',{},result=>{getManagerListResult(result)});
  }















    return (
      <>
        <Routes>
            <Route path="/" element={<>매장리스트</>} />
            <Route path="/qrcode/:shopSeq" element={<QRManager/>} />
            <Route path="/order/:shopSeq" element={<>주문관리</>} />
            <Route path="/coupon/:shopSeq" element={<CouponManager/>} />
        </Routes>
      </>
    );
  }
  export default Manager;