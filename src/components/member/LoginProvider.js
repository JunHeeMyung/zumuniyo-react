import React,{  useState,useEffect,createContext } from "react";
import ZumuniyoAxios from "components/common/ZumuniyoAxios";


export const LoginedContext = createContext(false);
export const MemNickContext = createContext('');
export const MemTypeContext = createContext('');

const LoginProvider = (props)=> {

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
                  {props.children}
                </MemTypeContext.Provider>
            </MemNickContext.Provider>
        </LoginedContext.Provider>
      </>
    );
  }
  export default LoginProvider;