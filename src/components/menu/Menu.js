import React,{useContext,useEffect, useState} from 'react';
import {GlobalContext} from "components/common/GlobalProvider";
import { useLocation } from 'react-router';
import { useNavigate } from "react-router-dom";


import "./Menu.css";
import MenuListManage from 'components/menu/MenuListManage';
import MenuListShopView from './MenuListShopView';
import MenuCategory from 'components/menucategory/MenuCategory';
import MenuInsertModal from 'components/menu/MenuInsertModal';
import MenuCategoryModal from 'components/menucategory/MenuCategoryModal';
import { Paper } from '@mui/material';






const Menu = () => {

    const [shopSeq,setShopSeq] = useState('');
    const [menuData,setMenuData] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const {logined,globalAxios,beforeLocation,currentLocation} = useContext(GlobalContext);
    
    const [reRender,setReRender] = useState(0);
    const doReRender = () =>{setReRender(c=>c+1)};
    

    const getMenuList = shopSeq => {

        globalAxios('/menu/menulist/'+shopSeq,'get',{},data=>{setMenuData(data)});

    }

    const getMenuListByMenuCategory = menuCategorySeq => {

        globalAxios('/menu/menucategoryview/'+menuCategorySeq,'get',{},data=>{setMenuData(data)});

    }
    

    useEffect(
        () => {

            const addrParts = location.pathname.split("/");
            if(addrParts.length<4||addrParts.length[3]==="") navigate(beforeLocation);
            setShopSeq(addrParts[3]);

            if(addrParts[3]!==''){
                    getMenuList(addrParts[3]);
            }

        }, [location.pathname,reRender]
      );

      useEffect(
        () => {
        }, [menuData]
      );


      
    return (
        <>
        <div id="menuWrapper">
            <Paper id="menuChildWrapper">
           { shopSeq===''||menuData===''?<></>
           :<>
            <div>
            <MenuCategory   shopSeq={shopSeq} 
                            menuData={menuData} getMenuList={getMenuList} 
                            getMenuListByMenuCategory={getMenuListByMenuCategory} 
                            reRender={reRender} doReRender={doReRender}
                            />
            </div>
            <div>
            <MenuCategoryModal shopSeq={shopSeq} getMenuList={getMenuList} doReRender={doReRender} reRender={reRender}/>    
            </div>

            <br></br>
            <hr></hr>
            <br></br>

            
            <div id="menuInsertModalBtn">
            <MenuInsertModal shopSeq={shopSeq} menuData={menuData} getMenuList={getMenuList}/>
            </div>
            <br></br>
            
            <div>
            <MenuListManage shopSeq={shopSeq} menuData={menuData} getMenuList={getMenuList} reRender={reRender} doReRender={doReRender} />
            </div>

            <br></br>
            <hr></hr>
            <br></br>

            {/* <MenuListShopView menuData={menuData} /> */}
            
           </>}

           </Paper>
           </div>

        </>
    );
}
export default Menu;