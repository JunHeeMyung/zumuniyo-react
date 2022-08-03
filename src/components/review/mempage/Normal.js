import React from 'react'
import { useContext } from "react";
import {GlobalContext} from "components/common/GlobalProvider";

export default function Normal() {
  const {logined,memNick,memType,globalAxios} = useContext(GlobalContext);

  return (
    <>
      {memType === '일반회원' ?
        <div>
          <h1>일반회원 영역</h1>
        </div>
        :
        <div>
          <h1>일반회원이 아닙니다</h1>
        </div>
      }

    </>
  )
}
