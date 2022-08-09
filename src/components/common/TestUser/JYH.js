
import React from "react";

import Menu from "components/menu/Menu";
import MenuQR from "components/menu/MenuQR";
import { Route, Routes,Link } from "react-router-dom";




const JYH = ()=> {
    return (
      <>
      <div>
      
          <Link to="/"><button>홈으로</button></Link>
          <Link to="menu"><button>메뉴</button></Link>
          <Link to="menuQR/4882"><button>QR메뉴 - 4882</button></Link>
          <Link to="menu/4882"><button>메뉴4882</button></Link>
          <Link to="menu/4883"><button>메뉴4883</button></Link>
            <hr/>
          
            <Routes>
              <Route path="/" element={<><h1>정영훈 테스트 페이지</h1></>} />
              <Route path="/menu/*" element={<Menu/>} />
              <Route path="/menuQR/*" element={<MenuQR />} />
              <Route path="*" element={<><h1>주소값 이상</h1></>} />
            </Routes>
          </div>
      </>

    );
  }


  export default JYH;