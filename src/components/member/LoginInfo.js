import React from "react";
import MemNick from "components/member/MemNick";
import MemType from "components/member/MemType";
import Logined from "components/member/Logined";

const LoginInfo = ()=> {

    return (
      <>
        <br/>
        로그인상태 : <Logined/>
        <br/>
        로그인아이디 : <MemNick/>
        <br/>
        로그인타입 : <MemType/>
      </>
    );
  }
  export default LoginInfo;