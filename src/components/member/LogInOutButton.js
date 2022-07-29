import React,{ useContext ,useEffect,useState} from "react";
import {GlobalContext} from "components/member/GlobalProvider";
import { Link } from "react-router-dom";

const LogInOutButton = () => {

    const {logined,setLogined,setMemNick,setMemType,globalAxios} = useContext(GlobalContext);

    const logout = () => {
        globalAxios('/member/logout','post',{},result=>{
          if(result) {
            sessionStorage.clear();
            setLogined(false);
            setMemNick('');
            setMemType('');
            alert("로그아웃 되었습니다");
          }});
    }

    useEffect(
      () => {
        globalAxios('/member/login','get',{},result=>{setLogined(result)});
        globalAxios('/member/nick','get',{},result=>{setMemNick(result)});
        globalAxios('/member/type','get',{},result=>{setMemType(result)});
      }, [logined]
    );

    return (
      <>
         { logined ?
          <button onClick={logout}>로그아웃</button>:
          <Link to="/MJH/sociallogin"><button>로그인</button></Link> }
      </>
    );
  }
  export default LogInOutButton;