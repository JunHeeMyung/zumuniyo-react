import React,{ useEffect } from "react";
import NaverLoginButton from 'images/naverlogin/naverlogin.png';
import KaKaoLoginButton from 'images/kakaologin/kakaologin.png';
import { Route, Routes,useNavigate} from "react-router-dom";
import NotFound from "components/common/NotFound";
import "./SocialLogin.css";
import NaverLogin from "components/member/NaverLogin";
import KakaoLogin from "components/member/KakaoLogin";

const SocialLogin = (props)=> {

    const { naver } = window;
    const navigate = useNavigate();

    const clickNaverLogin = () => document.getElementById("naverIdLogin").firstChild.click();

    const naverLoginButton = <img id='naverLoginButton' 
                                  src={NaverLoginButton} 
                                  alt='네이버로그인버튼' 
                                  onClick={clickNaverLogin} />;

    const kakaoLoginButton = <img id='kakaoLoginButton' 
                                  src={KaKaoLoginButton} 
                                  alt='카카오로그인버튼' />;

    const naverLogin = new naver.LoginWithNaverId({
      clientId: 'BR7MTDuiJVo2gsGBsL57',
      callbackUrl: 'http://localhost:3000/MJH/sociallogin/naver',
      isPopup: false,
      loginButton: { color: 'white', type: 1, height: '1' },
    });

    const initNaverLogin = () => naverLogin.init();       

    const loginButton = <> {naverLoginButton} {kakaoLoginButton} </>;

    const setPage = ()=>{
            const logined = sessionStorage.getItem('logined');
            if(logined){
              navigate(-1,{replace:true});
            }
    };
    
    useEffect(
      () => {
          initNaverLogin();
          setPage();
      }, []
    );

    return (
      <>
        <Routes>
          <Route path="/" element={loginButton} />
          <Route path="/naver/*" element={<NaverLogin naverLogin={naverLogin} />} />
          <Route path="/kakao/*" element={<KakaoLogin />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <div id='naverIdLogin' />
      </>
    );
  }
  export default SocialLogin;