import React,{  useState,useEffect,createContext } from "react";
import ZumuniyoAxios from "components/common/ZumuniyoAxios";
import TestPage from 'components/common/TestPage';

export const LoginedContext = createContext(false);
export const MemNickContext = createContext('');
export const MemTypeContext = createContext('');

const LoginProvider = ()=> {

    const [logined,setLogined] = useState(false);
    const [memNick,setMemNick] = useState('');
    const [memType,setMemType] = useState('');

    const getLogined = () => ZumuniyoAxios('/member/login','get',{},result=>{setLogined(result)});
    const getMemNick = () => ZumuniyoAxios('/member/nick','get',{},result=>{setMemNick(result)});
    const getMemType = () => ZumuniyoAxios('/member/type','get',{},result=>{setMemType(result)});

    useEffect(
      () => {
        getLogined();
        getMemNick();
        getMemType();
      }, []
    );

    return (
      <>
        <LoginedContext.Provider value={logined}>
            <MemNickContext.Provider value={memNick}>
                <MemTypeContext.Provider value={memType}>
                    <TestPage />
                </MemTypeContext.Provider>
            </MemNickContext.Provider>
        </LoginedContext.Provider>
      </>
    );
  }
  export default LoginProvider;