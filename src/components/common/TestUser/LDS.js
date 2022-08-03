import React from "react";
import FloatingActionButtonZoom from "components/review/components/FloatingActionButton";

// import { useContext } from "react";
// import { GlobalContext } from "components/common/GlobalProvider";
import { Route, Routes } from "react-router-dom";



import ReviewViewForm from "components/review/components/ReviewViewForm";
import ReviewInsert from "components/review/components/ReviewInsert";
import Admin from "components/review/mempage/Admin";
import Business from "components/review/mempage/Business";
import Normal from "components/review/mempage/Normal";
import NotFound from "components/common/NotFound";

import AdminStatistics from "components/review/mempage/admin/AdminStatistics";
import Management from "components/review/mempage/admin/Management";
import NickModify from "components/review/mempage/business/NickModify";
import StoreReviewManage from "components/review/mempage/business/StoreReviewManage";
import OrderManageQR from "components/review/mempage/business/OrderManageQR";
import OrderList from "components/review/mempage/normal/OrderList";




const LDS = () => {
  // const { logined, memNick, memType, globalAxios } = useContext(GlobalContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<><h1>이덕수 테스트 페이지</h1> <div><FloatingActionButtonZoom /> </div></>} />

        {/* 리뷰 */}
        <Route path="/reviewAllList" element={<ReviewViewForm />} />
        <Route path="/reviewInsert" element={<ReviewInsert />} />

        {/* 관리자 */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/management" element={<Management />} />
        <Route path="/admin/statistics" element={<AdminStatistics />} />


        {/* 사업자회원 */}
        <Route path="/business" element={<Business />} />
        <Route path="/business/nickModify" element={<NickModify />} />
        <Route path="/business/storeReviewManage" element={<StoreReviewManage />} />
        <Route path="/business/orderManageQR" element={<OrderManageQR />} />



        {/* 일반회원 */}
        <Route path="/normal" element={<Normal />} />
        <Route path="/normal/nickmodify" element={<NickModify />} />
        <Route path="/normal/reviewMemList" element={<ReviewViewForm />} />
        <Route path="/normal/orderList" element={<OrderList />} />
        <Route path="/normal/*" element={<NotFound />} />


        <Route path="*" element={<NotFound />} />
        <Route path="/admin/*" element={<NotFound />} />
        <Route path="/business/*" element={<NotFound />} />
        <Route path="/normal/*" element={<NotFound />} />
      </Routes>


      {/* { memType==='일반회원'? 
      <div>
          <FloatingActionButtonZoom/>  
      </div>
      :
      <div>
        <h1>일반회원이 아닙니다</h1>
      </div> 
      } */}

      {/* <div>
          <h1>이덕수 테스트 페이지</h1>
          <FloatingActionButtonZoom/>  
      </div> */}

    </>
  );
}
export default LDS;