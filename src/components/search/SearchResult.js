import { useLocation, useParams } from "react-router";
import axios from "axios";
import React , { useContext ,useEffect,useState} from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
const SearchResult = ()=> {
 


 const  string = <h1>검색결과</h1>
 const location = useLocation();
 const shoplist = location.state.shoplist; 
 console.log("샵: "+shoplist);

  
  
 return(
 <>

  {shoplist.map((shop,index)=>{
    return(
      <div key={index}>
      <Card elevation={5} sx={{ maxWidth: 345 }}>
      <CardHeader title={shop.shopName} ></CardHeader>
      <CardContent>{shop.shopInfo}</CardContent>
      <CardContent>{shop.shopCategory}</CardContent>
      <CardContent><img  src={`/image/${shop.shopLogo}`}/></CardContent>   
      {/* <CardActions>
        <Button variant="contained" color="primary">
          button
        </Button>
      </CardActions> */}
    </Card>
    </div>
    )
  })}
 
   </>
   )
  }

export default SearchResult;