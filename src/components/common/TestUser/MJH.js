import React from "react";
import { Route, Routes ,Link} from "react-router-dom";
import Register from "components/member/Register"

const MJH = ()=> {

    return (
      <>

        
       <Link to="/">홈으로 </Link>
       <Link to="register">회원가입 </Link>
        

        <hr/>
      
        <Routes>
          <Route path="/" element={<><h1>기능선택</h1></>} />
          <Route path="/register/*" element={<Register/>} />
          <Route path="*" element={<><h1>주소값 이상</h1></>} />
        </Routes>

      </>
    );
  }
  export default MJH;