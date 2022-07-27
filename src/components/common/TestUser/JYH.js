import MenuListTest from "components/menu/menuTest/MenuListTest";
import React from "react";
import { Route, Routes ,Link} from "react-router-dom";
import MenuHello from "components/menu/menuTest/MenuHello";



const JYH = ()=> {
    return (
      <>
      <div>
          <h1>정영훈 테스트 페이지</h1>
          <Link to="menuListTest">메뉴리스트 Test </Link>
          <hr/>

        <Routes>
          <Route path="/" element={<MenuHello name="jyh" color="blue" isSpecial={true} />} />
        </Routes>

          
        <Routes>
          <Route path="/" element={<><h2>기능선택</h2></>} />
          <Route path="/menuListTest/*" element={<MenuListTest/>} />
          <Route path="*" element={<><h2>주소값 이상</h2></>} />
        </Routes>

      </div>
      </>
    );
  }
  export default JYH;