import React,{ useContext,useEffect, useState } from 'react';
import {GlobalContext} from "components/common/GlobalProvider";
import { useLocation } from 'react-router';
import { useNavigate, useParams } from "react-router-dom";


import "./MenuListQR.css";

import { Collapse, List, ListItem, ListItemButton, ListItemText, Paper } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

import MenuQRDetail from 'components/menu/MenuQRDetail';

const MenuListQR = (props) =>{
    
    const { logined, memType, globalAxios, backLocation} = useContext(GlobalContext);
    const navigate = useNavigate();
    const location = useLocation();

    const params = useParams();
    const [menuData, setMenuData] = useState('');
    const [menuNewData, setMenuNewData] = useState('');
    const [categoryData, setCategoryData] = useState('');

    const [menuTopData, setMenuTopData] = useState('');

    const [topOpen, setTopOpen] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    const [reRender,setReRender] = useState(0);

    const [detailQRModalOpen, setDetailQRModalOpen] = useState(false);

    const menuTopClick = () => {
        setTopOpen(!topOpen);
       
    };
    const categoryClick = entrie => {
      setMenuOpen(!menuOpen);
      //getMenuListByMenuCategory(entrie.menuCategorySeq)  
      
     
    };

    const menuQRDetailClick = menu => {
      setMenuData(menu);
      //setMenuSeq(menu.menuSeq);
      handleModalOpen();
    };
    

    const whoami = menu => {
      alert(menu.menuSeq);
    }


    const getMenuCategoryList = shopSeq => {

        globalAxios('/menu/menucategory/'+shopSeq, 'get', {}, data=>{setCategoryData(data)});
    };

    const getMenuListTop = shopSeq => {

        globalAxios('/menu/menutopview/'+shopSeq, 'get',  {}, data=>{setMenuTopData(data)});
    };
    
    const getMenuListByMenuCategory = menuCategorySeq => {

        globalAxios('/menu/menucategoryview/'+menuCategorySeq, 'get', {}, data=>{setMenuData(data)});

    };


    useEffect (
        () => {
          getMenuListTop(props.shopSeq);
          getMenuCategoryList(props.shopSeq);
          
        
        }, [location.pathname, reRender]
        
    );
    useEffect (
      () => {

      }, [menuNewData]
    )


return (
    <>
    <div id= "mainframe">

    <List 
        sx={{ 
            width: '100%', 
            minWidth: 500,
            maxWidth: 700, 
            bgcolor: 'background.paper',
            border: '1px solid gray' 
        }}
        component="nav"
    >
      <ListItemButton onClick={menuTopClick}>
        <ListItemText primary="추천메뉴" />
        {topOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      
      <Collapse  in={topOpen} timeout="auto" unmountOnExit>
      <List disablePadding >
      
      {Object.values(menuTopData).map((menu) => (
        <ListItem key={menu.menuSeq}>
          <ListItemButton  sx={{ pl: 4 }} onClick={() => {menuQRDetailClick(menu.menuSeq)}} >
            <ListItemText primary={menu.menuName} /> 
          </ListItemButton>
          </ListItem>    
      ))}
      
      </List>
      </Collapse>
      

      {Object.values(categoryData).map((entrie) => (
      <ListItem key={entrie.menuCategorySeq} disablePadding >
        
        
        <ListItemButton onClick={categoryClick}>
          
          <ListItemText primary={entrie.menuCategoryName} />
            {menuOpen ? <ExpandLess  /> : <ExpandMore />}
        
        </ListItemButton>

        {Object.values(menuData).map((category) => (
        <Collapse in={menuOpen} timeout="auto" unmountOnExit>
          <List component="div" 
          key={category.menuSeq}
          disablePadding>
          <ListItemButton sx={{ pl: 4 }} >
          
            <ListItemText primary={category.menuName} />
            
          </ListItemButton>
          </List>
        </Collapse>
        ))}  

      </ListItem>
      ))}

      

    </List>

    </div>




    <MenuQRDetail 
    menuData = {menuData}
    detailQRModalOpen = {detailQRModalOpen}
    handleModalClose={handleModalClose}
    />
    
    
    </>
);

}

export default MenuListQR;








