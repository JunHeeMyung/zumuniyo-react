import React from "react";
import { Route, Routes ,Link} from "react-router-dom";
import SocialLogin from "components/member/SocialLogin"
const MJH = ()=> {

    return (
      <>
        
       <Link to="/">홈으로 </Link>
       
        <hr/>
      
        <Routes>
          <Route path="/" element={<><h1>명준희 테스트 페이지</h1></>} />
          <Route path="/sociallogin/*" element={<SocialLogin/>} />
          <Route path="*" element={<><h1>주소값 이상</h1></>} />
        </Routes>

      </>
    );
  }
  export default MJH;