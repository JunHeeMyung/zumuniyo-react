import React,{ useContext ,useEffect} from "react";
import {LoginedContext} from "components/member/LoginProvider";
import { Link } from "react-router-dom";
import ZumuniyoAxios from "components/common/ZumuniyoAxios";

const LogInOutButton = () => {

    const logout = () => {
        ZumuniyoAxios('/member/logout','post',{},result=>{
          if(result) {
            sessionStorage.clear();
            alert("로그아웃 되었습니다");
            window.location.reload();
          }});
    }

    useEffect(() => {}, []);

    return (
      <>
         { useContext(LoginedContext) ?
          <button onClick={logout}>로그아웃</button>:
          <Link to="/MJH/sociallogin"><button>로그인</button></Link> }
      </>
    );
  }
  export default LogInOutButton;