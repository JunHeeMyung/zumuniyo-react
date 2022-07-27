
import React ,{ useState, useEffect } from "react";
import ZumuniyoAxios from 'components/common/ZumuniyoAxios';
import { Route, Routes } from "react-router-dom";


const MenuListTest = ()=> {

    const [mainheartbeat,setMainheartbeat] = useState('');
    const [menuheartbeat,setMenuheartbeat] = useState('');
    const [menuListTest,setMenuList] = useState('');
    

    const menuListTestDisplay = 
        <>
        <h2>메인생존여부: {mainheartbeat}</h2>
        <h2>메뉴생존여부: {menuheartbeat}</h2>
        
        <h1>메뉴리스트</h1>
        
        
        {menuListTest} 
        <hr></hr>
        <br></br>
        
        
        </>;

    useEffect(
        ()=> {
            ZumuniyoAxios('/main/heartbeat','get', data => {setMainheartbeat(data);});
            ZumuniyoAxios('/menu/heartbeat','get', data => {setMenuheartbeat(data);});
            ZumuniyoAxios('/menu/menulist/4882','get', data => {setMenuList(JSON.stringify(data));});
            
        }, []
    );

    return (
        <>

        <Routes>
          <Route path="/" element={menuListTestDisplay} />
          
          <Route path="*" element={<><h1>주소값 이상</h1></>} />
        </Routes>
        
        </>

    );

} 

export default MenuListTest;


