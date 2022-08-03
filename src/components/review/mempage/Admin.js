import React from 'react'
import { useContext } from "react";
import {GlobalContext} from "components/common/GlobalProvider";

import AdminFloatingAction from '../components/AdminFloatingAction';

export default function Admin() {
  const {logined,memNick,memType,globalAxios} = useContext(GlobalContext);



  return (
    <>
     { memType==='관리자'? 
      <div>
          <h1>관리영역</h1>
          <AdminFloatingAction/>
      </div>
      :
      <div>
        <h1>관리자외 접근불가</h1>
      </div> 
      }

      
    </>
  )
}
