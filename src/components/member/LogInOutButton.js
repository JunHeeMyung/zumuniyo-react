import React,{ useContext ,useEffect} from "react";
import {GlobalContext} from "components/common/GlobalProvider";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

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
          <Link to="/zumuniyo/sociallogin"><Button variant="outlined" id="loginbutton">로그인</Button></Link> }
      </>
    );
  }
  export default LogInOutButton;