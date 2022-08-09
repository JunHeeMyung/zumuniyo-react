import React,{useContext,useEffect, useState} from 'react';
import {GlobalContext} from "components/common/GlobalProvider";
import { useLocation } from 'react-router';
import { useNavigate } from "react-router-dom";


import "./MenuListQR.css";
import MenuListManage from 'components/menu/MenuListManage';
import MenuListShopView from './MenuListShopView';
import MenuCategory from 'components/menucategory/MenuCategory';
import MenuInsertModal from 'components/menu/MenuInsertModal';
import MenuCategoryModal from 'components/menucategory/MenuCategoryModal';
import { ListItemButton, Paper } from '@mui/material';


const MenuListQR = () =>{
    
    const { logined, memType, globalAxios, backLocation} = useContext(GlobalContext);
    const navigate = useNavigate();
    const location = useLocation();

    const params = useParams();

    const [categoryData, setCategoryData] = useState('');

    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const getParentMenuListByMenuCategory = cno => {

        props.getMenuListByMenuCategory(cno);
    };



    const getMenuCategoryList = shopSeq => {

        globalAxios('/menu/menucategory/'+shopSeq, 'get', {}, data=>{setCategoryData(data)});
    };

    


    useEffect (
        () => {
  
        }, []
        
    );



return (
    <>
    <div id= "mainframe">

    <List 
        sx={{ 
            width: '100%', 
            maxWidth: 500, 
            bgcolor: 'background.paper',
            border: '1px solid gray' 
        }}

    >
        {Object.values(categoryData).map((entrie) => (
      <ListItem disablePadding 
      key={entrie.menuCategorySeq}
      >
      <ListItemButton onClick={handleClick}>
        
        <ListItemText primary={entrie.menuCategoryName} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      </ListItem>
      ))}

      {Object.values(menuData).map((menu) => (
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
          
            <ListItemText primary={menu.menuName} />
            <ListItemText primary={menu.menuPrice} />
            <ListItemText primary={menu.menuSimpleinfo} />
            <ListItemText primary={menu.menuImage} />

          </ListItemButton>
        </List>
      </Collapse>
      ))}

    </List>

    </div>
    
    
    </>
);

}

export default MenuListQR;








