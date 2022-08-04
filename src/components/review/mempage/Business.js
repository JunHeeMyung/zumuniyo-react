import React from 'react'
import { useContext } from "react";
import {GlobalContext} from "components/common/GlobalProvider";

export default function Business() {
  const {logined,memNick,memType,globalAxios} = useContext(GlobalContext);
  
  return (
    <>
      {memType === '사업자회원' ?
        <div>
          <h1>사업자회원 영역</h1>
        </div>
        :
        <div>
          <h1>사업자회원이 아닙니다</h1>
        </div>
      }

    </>
  )
}
