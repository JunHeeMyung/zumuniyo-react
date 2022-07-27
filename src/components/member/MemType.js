import React,{  useState,useEffect } from "react";
import ZumuniyoAxios from "components/common/ZumuniyoAxios";

const MemType = ()=> {

    const [memType,setMemType] = useState('');

    const getMemType = () => ZumuniyoAxios('/member/type','get',{},result=>{setMemType(result)});
    
    useEffect(
        () => {
            getMemType();
        }, []
    );

    return (
      <>
        {memType}
      </>
    );
  }
  export default MemType;