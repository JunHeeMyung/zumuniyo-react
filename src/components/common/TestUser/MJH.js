import React from "react";
import { Route, Routes ,Link} from "react-router-dom";
import SocialLogin from "components/member/SocialLogin"
import LoginInfo from "components/member/LoginInfo";
const MJH = ()=> {

    return (
      <>
        
       <Link to="/"><button>홈으로</button></Link>
       <Link to="logindata"><button>로그인정보보기</button></Link>
        <hr/>
      
        <Routes>
          <Route path="/" element={<><h1>명준희 테스트 페이지</h1></>} />
          <Route path="/sociallogin/*" element={<SocialLogin/>} />
          <Route path="/logindata" element={<LoginInfo/>} />
          <Route path="*" element={<><h1>주소값 이상</h1></>} />
        </Routes>

      </>
    );
  }
  export default MJH;