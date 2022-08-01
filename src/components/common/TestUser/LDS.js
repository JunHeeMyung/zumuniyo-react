import React from "react";
import FloatingActionButtonZoom from "components/review/components/FloatingActionButton";

import { useContext } from "react";
import {GlobalContext} from "components/member/GlobalProvider";


const LDS = ()=> {  
  const {logined,memNick,memType,globalAxios} = useContext(GlobalContext);

    return (
      <>
      

      { memType==='일반회원'? 
      <div>
          {/* <h1>이덕수 테스트 페이지</h1> */}
          <FloatingActionButtonZoom/>  
      </div>
      :
      <div>
        <h1>일반회원이 아닙니다</h1>
      </div> 
      }
      
      {/* <div>
          <h1>이덕수 테스트 페이지</h1>
          <FloatingActionButtonZoom/>  
      </div> */}
      </>
    );
  }
  export default LDS;