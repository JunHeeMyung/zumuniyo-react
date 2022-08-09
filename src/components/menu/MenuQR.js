import React,{ useContext,useEffect, useState } from 'react';
import { GlobalContext } from "components/common/GlobalProvider";
import { useParams } from "react-router-dom";
import { Box, Collapse, List, ListItem, ListItemButton, ListItemText, Paper } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import "./MenuQR.css";

const menuListStyle = { 
    width: '100%', 
    minWidth: 500,
    maxWidth: 700, 
    bgcolor: 'background.paper',
    border: '1px solid gray' 
}



const MenuQR = () => {

    const {globalAxios} = useContext(GlobalContext);
    const params = useParams();

    const [menuList,setMenuList] = useState('');
    const [menuCategoryList,setMenuCategoryList] = useState('');
    const [menuTopList,setMenuTopList] = useState('');
    
    const [topOpen, setTopOpen] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);


    const getMenuList = shopSeq => {
        globalAxios('/menu/menulist/'+shopSeq,'get',{},data=>{setMenuList(data)});
    }
    const getMenuCategoryList = shopSeq => {
        globalAxios('/menu/menucategory/'+shopSeq, 'get', {}, data=>{setMenuCategoryList(data)});
    };
    const getMenuTopList = shopSeq => {
        globalAxios('/menu/menutopview/'+shopSeq, 'get',  {}, data=>{setMenuTopList(data)});
    };

    useEffect(
        () => {
            getMenuList(params.shopSeq);
            getMenuCategoryList(params.shopSeq)
            getMenuTopList(params.shopSeq)
        }, []
      );

    return (
        <>
        {JSON.stringify(menuList)}
        <hr/>
        {JSON.stringify(menuCategoryList)}
        <hr/>
        {JSON.stringify(menuTopList)}


        
        {menuList&&menuCategoryList&&menuTopList?
            <>



            </>
        :""}
        </>
    );

}

export default MenuQR;


