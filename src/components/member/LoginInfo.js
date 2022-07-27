import React,{ useContext } from "react";
import {LoginedContext,MemNickContext,MemTypeContext} from "components/member/LoginProvider";

const LoginInfo = ()=> {

    return (
      <>
        <br/>
        로그인상태 : {useContext(LoginedContext)?"로그인됨":"로그인안됨"}
        <br/>
        로그인아이디 : {useContext(MemNickContext)}
        <br/>
        로그인타입 : {useContext(MemTypeContext)}
        
      </>
    );
  }
  export default LoginInfo;