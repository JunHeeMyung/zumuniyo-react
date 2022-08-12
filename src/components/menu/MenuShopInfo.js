import React, { useState, useEffect, useContext } from "react";

import { GlobalContext } from "components/common/GlobalProvider";
import { Box, ImageList, Paper, TextField, Typography } from "@mui/material";
import { Image } from "@mui/icons-material";

const MenuShopInfo = (props) => {

  const { logined, memNick, memType, globalAxios } = useContext(GlobalContext);

  const [shopSeq, setShopseq] = useState(props.shopSeq);
  const [shopList, setShopList] = useState([]);
  const [shop, setShop] = useState({});

  const shopSelect = () => {
    globalAxios(`/shop/shopListByseq/${shopSeq}`, 'get', {}, res => {
      if (res) {
        console.log(res);
        setShop(res);
        // setShoplist(res);
      } else {
        alert("failed to");
      }
    });
  }

  useEffect(shopSelect, []);


  return (
    <>
    
    <Box    id="shopViewBox"
            width="800px"
            >
    <Paper>
    <div>

    <Box sx={{ float:"left" }}>
      <Image id="shopLogoImg">{shop.shopLogo}</Image>
      </Box>
      
      <div>
      <Typography id="shopName" variant="h4" >{shop.shopName}</Typography>
      <br/>

      <Typography>{shop.shopInfo}</Typography>

      <Typography>{shop.shopNotice}</Typography>
      <br/>
      </div>
      
    </div>
    </Paper>
    </Box>
   
   
    </>
  );
}

export default MenuShopInfo;


