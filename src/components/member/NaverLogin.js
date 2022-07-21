import React ,{ useState, useEffect } from "react";
import ZumuniyoAxios from 'components/common/ZumuniyoAxios'


const NaverLogin = ()=> {

    const [mainheartbeat,setMainheartbeat] = useState('');
    const [memberheartbeat,setMemberheartbeat] = useState('');

    useEffect(
        () => {
            ZumuniyoAxios('/main/heartbeat','get', data => {setMainheartbeat(data);});
            ZumuniyoAxios('/member/heartbeat','get', data => {setMemberheartbeat(data);});
        }, []
    );

    return (
      <>
        <h1>메인생존여부: {mainheartbeat}</h1>
        <h1>멤버생존여부: {memberheartbeat}</h1>
        <h1>네이버로그인</h1>
      </>
    );
  }
  export default NaverLogin;