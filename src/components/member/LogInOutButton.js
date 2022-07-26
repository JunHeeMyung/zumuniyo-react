import React,{  useState,useEffect } from "react";
import ZumuniyoAxios from 'components/common/ZumuniyoAxios';
import { Link } from "react-router-dom";

const LogInOutButton = (props) => {

    const [logined,setLogined] = useState('');

    const checkLogined = () => {
        ZumuniyoAxios('/member/login','get',{},result=>{setLogined(result)});
    }

    const logout = () => {
        ZumuniyoAxios('/member/logout','post',{},result=>{if(result) {
          sessionStorage.clear();
          alert("로그아웃 되었습니다");
          window.location.reload();
        }});
    }

    useEffect(
        () => {
            checkLogined();
        }, []
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