import React,{  useState,useEffect } from "react";
import ZumuniyoAxios from "components/common/ZumuniyoAxios";

const MemNick = ()=> {

    const [memNick,setMemNick] = useState('');

    const getMemNick = () => ZumuniyoAxios('/member/nick','get',{},result=>{setMemNick(result)});
    
    useEffect(
        () => {
            getMemNick();
        }, []
    );

    return (
      <>
        {memNick}
      </>
    );
  }
  export default MemNick;