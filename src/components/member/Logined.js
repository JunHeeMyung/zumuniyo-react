import React,{  useState,useEffect } from "react";
import ZumuniyoAxios from "components/common/ZumuniyoAxios";

const Logined = ()=> {

    const [logined,setLogined] = useState(false);

    const getLogined = () => ZumuniyoAxios('/member/login','get',{},result=>{setLogined(result)});

    useEffect(
        () => {
          getLogined();
        }, []
    );

    return (
      <>
        {JSON.stringify(logined)}
      </>
    );
  }
  export default Logined;