import React,{useContext,useEffect, useState} from 'react';
import {GlobalContext} from "components/common/GlobalProvider";
import { useLocation } from 'react-router';
import { useNavigate } from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Menu.css";
import MenuListManage from './MenuListManage';
import MenuListShopView from './MenuListShopView';

const Menu = (props) => {

    const [shopSeq,setShopSeq] = useState('');
    const [menuData,setMenuData] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const {logined,globalAxios,beforeLocation,currentLocation} = useContext(GlobalContext);
    

    const getMenuList = shopSeq => {

        globalAxios('/menu/menulist/'+shopSeq,'get',{},data=>{setMenuData(data)});

    }


    useEffect(
        () => {

            const addrParts = location.pathname.split("/");
            if(addrParts.length<4||addrParts.length[3]==="") navigate(beforeLocation);
            setShopSeq(addrParts[3]);

            if(addrParts[3]!==''){
                getMenuList(addrParts[3]);
            }

        }, [location.pathname]
      );
      
    return (
        <>
           { shopSeq===''||menuData===''?<></>
           :<>

            <MenuListManage menuData={menuData} />
            
            <br></br>
            <hr></hr>
            <br></br>

            {/* <MenuListShopView menuData={menuData} /> */}
            
           </>}
        </>
    );
}
export default Menu;