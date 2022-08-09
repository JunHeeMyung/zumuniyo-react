import React,{useContext,useEffect, useState} from 'react';
import {GlobalContext} from "components/common/GlobalProvider";
import { useLocation } from 'react-router';
import { useNavigate } from "react-router-dom";


import "./MenuQR.css";
import MenuListManage from 'components/menu/MenuListManage';
import MenuListShopView from './MenuListShopView';
import MenuCategory from 'components/menucategory/MenuCategory';
import MenuInsertModal from 'components/menu/MenuInsertModal';
import MenuCategoryModal from 'components/menucategory/MenuCategoryModal';
import { Paper } from '@mui/material';

const MenuQR = (props) => {

    const {logined,globalAxios,beforeLocation,currentLocation} = useContext(GlobalContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [shopSeq,setShopSeq] = useState('');
    const [menuData,setMenuData] = useState('');

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
        }, [props.menuData]
      );





    return (
        <>
        <div id="menuQRWrapper" >
        <Paper id="menuQRChildWrapper">
        { shopSeq===''||menuData===''?<><h2>매장시퀀스 또는 메뉴데이터가 없습니다.</h2></>
            :<>
            <div>
                <MenuListQR shopSeq={shopSeq} menuData={menuData} 
                getMenuListByMenuCategory={getMenuListByMenuCategory} 
                getMenuList={getMenuList} reRender={reRender} doReRender={doReRender} />
            </div>
            
            <div></div>
            
            <div></div>
            
            
            </>
        }
        </Paper>
        </div>
        </>
    );

}

export default MenuQR;


