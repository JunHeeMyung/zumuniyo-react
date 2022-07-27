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
      else if(result === '로그인성공'){
        navigate(-2,{replace:true});
        window.location.reload();
      }else{
        navigate(-2,{replace:true});
        window.location.reload();
      }
      
    };

    const login = () => {
        props.naverLogin.getLoginStatus((status)=>{
        if(status){
            const memEmail = JSON.stringify(props.naverLogin.user.email).replaceAll('"','');
            const memToken = JSON.stringify(props.naverLogin.accessToken.accessToken).replaceAll('"','');
            setEmail(memEmail);

            if(registered===''){
              ZumuniyoAxios('/member/login/naver/','post',{memEmail:memEmail,memToken:memToken},result=>{loginResult(result)});
            }
          
        }
      })
    };

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