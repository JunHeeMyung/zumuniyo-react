import React  from "react";
import { Route, Routes } from "react-router-dom";
import QRManager from "components/manager/QRManager";

const Manager = ()=> {



    return (
      <>
        <Routes>
            <Route path="/" element={<>매장리스트</>} />
            <Route path="/qrcode/:shopSeq" element={<><QRManager/></>} />
            <Route path="/order/:shopSeq" element={<>주문관리</>} />
            <Route path="/coupon/:shopSeq" element={<>쿠폰관리</>} />
        </Routes>
      </>
    );
  }
  export default Manager;