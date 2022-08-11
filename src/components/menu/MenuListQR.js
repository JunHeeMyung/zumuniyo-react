import React,{ useContext,useEffect, useState } from 'react';
import { GlobalContext } from "components/common/GlobalProvider";
import { useParams,useNavigate } from "react-router-dom";
import { Box, Collapse, List, ListItem, ListItemButton, ListItemText, Paper 
    ,TableCell,TableRow,TableContainer,Table,TableHead,TableBody,Button
    ,Modal,Stack,IconButton,TextField, ImageListItem} from '@mui/material';
import { ExpandLess } from '@mui/icons-material';
import "./MenuListQR.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CouponList from 'components/coupon/CouponList';
import CouponSelector from "components/coupon/CouponSelector";


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import { styled } from '@mui/material/styles';
import ClearIcon from '@mui/icons-material/Clear';
import { red, yellow } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
import "./MenuListQR.css"; 




const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));




const style = {
  position: 'absolute',
  top: '5%',
  left: '50%',
  transform: 'translate(-50%, 0)',
  height:'40em',
  width: '24em',
  bgcolor: 'background.paper',
  border: '1px solid gray',
  boxShadow: 18,
  p: 1,

  borderRadius: 2,
  
};







const MenuListQR = () => {

    const {globalAxios} = useContext(GlobalContext);
    const params = useParams();
    const navigate = useNavigate();

    

    const [detailMenu,setDetailMenu] = useState('');
    const [menuList,setMenuList] = useState('');
    const [menuCategoryList,setMenuCategoryList] = useState('');
    const [menuTopList,setMenuTopList] = useState('');
    const [selectedMenu,setSelectedMenu] = useState('');
    const [tempOrderData,setTempOrderData] = useState({});
    
    const [orderMenuList,setOrderMenuList] = useState({});
    const [menuCategorySeq,setMenuCategorySeq] = useState(-1);
    const [openList,setOpenList] = useState({});
    const [selectedCoupon,setSelectedCoupon] = useState(0);

    const [requestData,setRequestData] = useState({
            tableNum: params.tableNum ,
            shopSeq: params.shopSeq,
            orderList : JSON.stringify(orderMenuList),
            couponSeq: selectedCoupon
    });
    
    const [value, setValue] = useState('Controlled');



    const couponSelect = couponSeq => {
        setSelectedCoupon(couponSeq);
    }


    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    
    const onChange = (event) => {
      setValue(event.target.value);
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [topOpen, setTopOpen] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    const [checker,setChecker] = useState(true);

    const menuTopClick = () => {
      setTopOpen(!topOpen);
    };
    const categoryClick = menuCategorySeq => {

      const temp = {[menuCategorySeq]:(!openList[(String)(menuCategorySeq)])};

      setOpenList({...openList,...temp});
      
    };

    const consoleTest = param => {
      console.log(param);
    };

    const [cartOpen, setCartOpen] = useState(false);
    const handleCartOpen = () => setCartOpen(true);
    const handleCartClose = () => setCartOpen(false);

    const setCount = (e,menuSeq) => {

        const OrderData = {};
        OrderData[menuSeq]=(Number)(e.target.value);
        setTempOrderData(OrderData);
        
    }
    

    const cartIn = () => {
        const key = Object.keys(tempOrderData)[0];
        if(orderMenuList[key]){
            const OrderData = {};
            OrderData[key]=(Number)(tempOrderData[key]+orderMenuList[key]);
            setOrderMenuList({...orderMenuList,...OrderData});
        }else{
            setOrderMenuList({...orderMenuList,...tempOrderData});
        }
        alert("선택하신 메뉴를 주문목록에 담았습니다.");
        handleClose();
    }
    
    const tableTopStyle = {
        textAlign:"center" ,
        backgroundColor: "rgb(71, 30, 30,0.8)",
        fontWeight:"bold",
        color:"white"
     };
    
     const tableHeadStyle = {
        textAlign:"center" ,
        backgroundColor: "rgb(240, 240, 240)",
        fontWeight:"bold"
     };

     const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '25em',
        bgcolor: 'background.paper',
        boxShadow: 12,
        height: '28.5em'
      };

      const textFieldStyle = {
        '& label.Mui-focused': {
            color: '#AAAAAA',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#AAAAAA',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#AAAAAA',
            },
            '&:hover fieldset': {
              borderColor: '#AAAAAA',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#AAAAAA',
            },
          },
        width: "30%",
        pl: 1
      };

    const getMenuList = shopSeq => {
        globalAxios('/menu/menulist/'+shopSeq,'get',{},data=>{setMenuList(data)});
    }
    const getMenuCategoryList = shopSeq => {
        globalAxios('/menu/menucategory/'+shopSeq, 'get', {}, data=>{setMenuCategoryList(data)});
    };
    const getMenuTopList = shopSeq => {
        globalAxios('/menu/menutopview/'+shopSeq, 'get',  {}, data=>{setMenuTopList(data)});
    };

    const requestOrder = () => {
        globalAxios('/order/orderlist','post',requestData,result=>{requestOrderResult(result)});
    }

    const getDetailMenu = menuSeq => {
      globalAxios('/menu/menudetail/'+menuSeq, 'get', {}, data=>{setDetailMenu(data)} );
    }



    const requestOrderResult = result => {
        if(((String)(result)).indexOf(":")!==-1 &&
            ((String)(result)).split(":")[0]==="주문성공"){
            alert("주문성공");
            navigate("/MJH/orderlist/"+((String)(result)).split(":")[1]);
        }else{
            alert(result);
        }
    }

    const openDetail = menuListRow => {
        setSelectedMenu(menuListRow);
        handleOpen();
    }

    const removeCartItem = menuSeq =>{
        alert("메뉴를 주문목록에서 제거했습니다.");
        delete orderMenuList[menuSeq];
        setRequestData({...requestData, "orderList" : JSON.stringify(orderMenuList)})
    }

    var tempMenuOpen={};
    var tempMenu = "";

    const findDataByMenuSeq = menuSeq => {
      for( let menu of menuList){
        if((Number)(menu.menuSeq) === (Number)(menuSeq)){
          return menu;
        }
      }
      return null;
    }

    


    useEffect(
      () => {
        setRequestData({...requestData, "couponSeq" : selectedCoupon})
      }, [selectedCoupon]
    );

    useEffect(
        () => {
            getMenuList(params.shopSeq);
            getMenuCategoryList(params.shopSeq)
            getMenuTopList(params.shopSeq)
            
        }, []
      );

    useEffect(
        () => {
            setRequestData({...requestData, "orderList" : JSON.stringify(orderMenuList)})
        }, [orderMenuList]
      );
    
     
      

      

    return (
        <>
        {/* {JSON.stringify(menuList)}
        <hr/>
        {JSON.stringify(menuCategoryList)}
        <hr/>
        {JSON.stringify(menuTopList)} */}
        <hr/>
        {JSON.stringify(tempOrderData)}
        <hr/>
        {JSON.stringify(orderMenuList)}
        <hr/>
        {JSON.stringify(requestData)}
        <hr/>
        {JSON.stringify(openList)}
        <hr/>
        <CouponList shopSeq={params.shopSeq}/>
        <hr/>
        
        {menuList&&menuCategoryList&&menuTopList?
            <>
            {checker?
              <>
              {(()=>{tempMenuOpen={}})()}
              {
                Object.values(menuCategoryList).map((menuCategory) => (
                  <>
                  {(()=>{tempMenuOpen={...tempMenuOpen,[menuCategory.menuCategorySeq]:false}})()}
                  </>
                ))}
              {(()=>{setChecker(!checker)})()}
              {(()=>{setOpenList(tempMenuOpen);
              })()}
            </>
            :""}


          <div>
          <CouponSelector shopSeq={params.shopSeq} couponSelect={couponSelect}/>
          </div>    
          <hr/>


                <Box    id="MenuCollapseBox"
                        display="flex"
                        justifyContent="center"
                        alignItems="center">
                    <Paper sx={{ width: '100%', overflow: 'hidden', maxWidth:'50em'}}>
                        <List  component="nav">
                            <ListItemButton onClick={menuTopClick}>
                                <ListItemText primary="추천메뉴" />
                                {topOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse  in={topOpen} timeout="auto" unmountOnExit>
                                <List disablePadding >
                                    {Object.values(menuTopList).map((menu) => (
                                        <ListItem className='' key={menu.menuSeq}>
                                        <ListItemButton  sx={{ pl: 4 }} onClick={() => {
                                                        consoleTest(menu.menuSeq); 
                                                        const OrderData = {};
                                                        OrderData[menu.menuSeq]=1;
                                                        setTempOrderData(OrderData);
                                                        openDetail(menu);
                                                    }}>

                                            <ListItemText primary={menu.menuName} /> 
                                            <ListItemText primary={menu.menuSimpleInfo} /> 
                                            <ListItemText primary={menu.menuPrice+" 원"} /> 
                                            <ImageListItem className="menuQRImage" >
                                              <img src={"/image/"+menu.menuImage } />
                                            </ImageListItem>

                                        </ListItemButton>
                                        </ListItem>    
                                    ))}
                                </List>
                            </Collapse>
                            {Object.values(menuCategoryList).map((menuCategory) => (
                              <>
                            <ListItem key={menuCategory.menuCategorySeq} disablePadding >
                                 <ListItemButton onClick={() => {categoryClick(menuCategory.menuCategorySeq);}}>
                                        <ListItemText primary={menuCategory.menuCategoryName} />
                                                { menuOpen ? <ExpandLess/> : <ExpandMore/> }
                                 </ListItemButton>
                            </ListItem>
                            
                            {Object.values(menuList).map((menu) => (
                              <>
                                  <Collapse key={menu.menuSeq} in={openList[(String)(menuCategory.menuCategorySeq)]} timeout="auto" unmountOnExit>      
                                  {menuCategory.menuCategorySeq===menu.menuCategory.menuCategorySeq?
                                      <>
                                      <List component="div"  disablePadding >
                                          <ListItem  disablePadding >
                                              
                                                  <ListItemButton sx={{ pl: 4 }} 
                                                    onClick={()=>{
                                                        const OrderData = {};
                                                        OrderData[menu.menuSeq]=1;
                                                        setTempOrderData(OrderData);
                                                        openDetail(menu);
                                                    }}>
                                                      <ListItemText primary={menu.menuName} />
                                                      <ListItemText primary={menu.menuSimpleInfo} />
                                                      <ListItemText primary={menu.menuPrice} />
                                                      <ImageListItem className="menuQRImage" >
                                                      <img src={"/image/"+menu.menuImage } />
                                                      </ImageListItem>
                                                  </ListItemButton>
                                              
                                          </ListItem>
                                          </List>
                                      </>
                                  :""}
                                  </Collapse>      
                                  </>
                                  ))}
                            
                                  </>
                            ))}
                        </List>
                    </Paper>
                </Box>

                <Button edge ="end" onClick={()=>{
                        handleCartOpen();
                    }}>
                    카트보기
                </Button>

                {selectedMenu!==''?<>
      
      
      <div id="menuDetailContainer">
        
        <Modal open={open} >
          
          {/* <Box sx={style}
               id="menuDetailBox"
               component="form"
               noValidate
               autoComplete='off'
               //onSubmit={}      
          > */}
            
            <div className="modal" id="cartInModal">
            
            <Card sx={style} id="menuDetailCard">
            <CardHeader
              avatar={ 
                selectedMenu.menuTop?  
                <div><StarIcon sx={{ color: yellow[500] }} aria-label="recommended" /></div> : <div></div>
              }
              className="modal-title" align='center' 
              action={
                <div>
              <IconButton edge="end" aria-label="modal-close" onClick={handleClose} >
                <ClearIcon />
              </IconButton>
              </div>
              }
              title={
                <Typography gutterBottom variant="h5" component="div" >
                  {selectedMenu.menuName}
                </Typography>
                }
              subheader={
                <Typography variant="body2" color="text.secondary" >
                  {selectedMenu.menuCategory.menuCategoryName}
                </Typography>
                }
            />
            <div id="menuDetailWrapper">
            <CardMedia
              component="img"
              height="194"
              image={"/image/"+selectedMenu.menuImage}
              alt="detail-image"
            />
            <CardContent>
              
              <Typography className="subtitle2" variant="subtitle2" color="text.secondary">메뉴소개</Typography>
                <div>
                {/* <TextField
                  id="menuDetailInfo-textField"  
                  multiline
                  fullWidth 
                  maxRows={1}
                  value={menuData.menuSimpleInfo}
                  onChange={onChange}
                /> */}

                <Typography variant="body1" color="text.primary" >
                  <span id="menuSimpleInfoSpace" >{selectedMenu.menuSimpleInfo}</span>
                </Typography>


                </div>
                
                <div>
              <Typography className="subtitle2" variant="subtitle2" color="text.secondary">주문수량</Typography>
                <TextField sx={textFieldStyle} name="selectedMenuCount" 
                                    defaultValue="1"
                                    onChange={e=>{setCount(e,selectedMenu.menuSeq)}}
                                    // label="수량" 
                                    type="number" 
                                    size="small" 
                                    InputProps={{ inputProps: { min: 1} }}
                                    focused/>
                </div>
                
              <Typography variant="h6" color="text.primary">
                <Typography id="menuPriceGagyuk" className="subtitle2" variant="subtitle2" color="text.secondary">가격</Typography>
                <div id="menuPriceSpace" align='right'>
                  {((Number)(selectedMenu.menuPrice)).toLocaleString('ko-KR') +' 원'} 
                </div>
              </Typography>  


            </CardContent>



            <CardActions disableSpacing>
              {/* <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton> */}

                  <Typography sx={{ pl:1 , pt:1 }}variant="body1" color="text.secondary">상세보기</Typography>  
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    
                    <ExpandMoreIcon />
                  </ExpandMore>
                  
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                
                <Typography variant="body2" color="text.secondary">메뉴상세</Typography>
                <div>
                <TextField
                  id="menuDetailInfo-textField"
                  
                  multiline
                  fullWidth 
                  rows={4}
                  value={selectedMenu.menuDetailInfo}
                  onChange={onChange}
                  
                />
                </div>

              </CardContent>
            </Collapse>
            

            </div>
            
            
           <div id="modalBottomWrapper">
                <Stack spacing={2} direction="row" justifyContent="center">
                    <Button variant="outlined" id="cartInButton" onClick={cartIn}>목록에 담기</Button>
                    <Button variant="outlined" id="cartCancelButton" onClick={handleClose}>취소</Button>
                </Stack>
            </div>

            </Card>
            
            <br></br>
            

            </div>
          {/* </Box> */}
          
        </Modal>
      </div>

      </>:""}

        <Modal open={cartOpen} onChange={getDetailMenu}>
            <Box sx={modalStyle} id="cartModal">

                <div id="modalHead"> 담은 메뉴</div>

                {Object.keys(orderMenuList).map((menuSeq)=>{
                    return (
                        <>
                        <div key={menuSeq}>
                          {(()=>{ tempMenu= findDataByMenuSeq(menuSeq);})()}
                          
                          {/* {"메뉴번호: "+ menuSeq + ", 갯수: " + orderMenuList[menuSeq]} */}
                        
                          <ListItem >
                            <ListItemButton >
                              <ListItemText primary={tempMenu.menuName} />
                              <ListItemText primary={tempMenu.menuPrice + "원"} />
                              <ListItemText primary={orderMenuList[menuSeq] + "개"} />
                            </ListItemButton>
                          </ListItem> 
                       
                        <Button variant="outlined" onClick={()=>{removeCartItem(menuSeq)}}>x</Button>
                        
                        <br/>
                        </div>
                        </>
                    );
                })}
                <Stack spacing={2} direction="row" justifyContent="center">
                    <Button variant="outlined" id="cartInButton" onClick={requestOrder}>주문</Button>
                    <Button variant="outlined" id="cartCancelButton" onClick={handleCartClose}>취소</Button>
                </Stack>
                
            </Box>
      </Modal>

            </>
        :""}
        </>
    );

}

export default MenuListQR;


