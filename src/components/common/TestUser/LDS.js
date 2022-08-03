import React from "react";
import FloatingActionButtonZoom from "components/review/components/FloatingActionButton";

import { useContext } from "react";
import {GlobalContext} from "components/common/GlobalProvider";
import { Route, Routes } from "react-router-dom";

import ReviewViewForm from "components/review/components/ReviewViewForm";
import ReviewInsert from "components/review/components/ReviewInsert";
import Admin from "components/review/mempage/Admin";
import Business from "components/review/mempage/Business";
import Normal from "components/review/mempage/Normal";
import NotFound from "components/common/NotFound";




const LDS = ()=> {  
  // const {logined,memNick,memType,globalAxios} = useContext(GlobalContext);

    return (
      <>
      {/* <h1>이덕수 테스트 페이지</h1> */}
        <Routes>
          <Route path="/" element={<><h1>이덕수 테스트 페이지</h1> <div><FloatingActionButtonZoom/> </div></>} />
          <Route path="/reviewAllList" element={<ReviewViewForm />} />
          <Route path="/reviewMemList" element={<ReviewViewForm />} />
          <Route path="/reviewInsert" element={<ReviewInsert />} />
          {/* <Route path="/mypage" element={<LDS />} /> */}

          <Route path="/admin" element={<Admin />} />
          <Route path="/business" element={<Business />} />
          <Route path="/normal" element={<Normal />} />



          <Route path="*" element={<NotFound/>} />
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