import NotFound from "components/common/NotFound";
import React,{  useState,useEffect } from "react";
import { Route, Routes ,useNavigate} from "react-router-dom";
import ZumuniyoAxios from 'components/common/ZumuniyoAxios';
import Register from 'components/member/Register'

const NaverLogin = (props)=> {

    const [email,setEmail] = useState('');
    const [registered,setRegistered] = useState('');
    const navigate = useNavigate();

    const loginResult = (result)=>{
      setRegistered(result);

      if (result === '아이디없음'){
        navigate('register');
      }
      else if(['입력값없음','토큰이상','로그인실패'].indexOf(result)===-1){
        sessionStorage.setItem('member',result);
        window.location.reload();
      }else{
        navigate('..');
      }
      
    };

    const login = () => props.naverLogin.getLoginStatus((status)=>{
      if(status){
        if(email===''){

          let memEmail = JSON.stringify(props.naverLogin.user.email).replaceAll('"','');
          let memToken = JSON.stringify(props.naverLogin.accessToken.accessToken).replaceAll('"','');
          setEmail(memEmail);

          let params = new URLSearchParams();
          params.append('memEmail',memEmail);
          params.append('memToken',memToken);

          if(registered===''){
            ZumuniyoAxios('/member/login/naver/','post',params,result=>{loginResult(result)});
          }
        }
      }
    });

    useEffect(
      () => {
        login();

      }, []
    );

    return (
        <>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/register" element={<Register memEmail={email} socialType={'naver'}/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        </>
    );
  }
  export default NaverLogin;