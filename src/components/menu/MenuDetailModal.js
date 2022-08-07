import React,{useContext,useEffect, useState, useRef} from 'react';
import {GlobalContext} from "components/common/GlobalProvider";
import { useLocation } from 'react-router';
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { List, ListItem, ListItemText, TableBody, TableCell, TableRow, TextField } from '@mui/material';

import { styled } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import { red, yellow } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';




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
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid gray',
  boxShadow: 18,
  p: 1,

  borderRadius: 2,
  
};


const MenuDetailModal = (props) => {

  
  const [menuData,setMenuData] = useState('');
  const [menuDetail,setMenuDetail] = useState('');
  
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [value, setValue] = useState('Controlled');

  const onChange = (event) => {
    setValue(event.target.value);
  };
  


  // const handleChangeData = (e) => {
  //   setMenuData(e.target.value);
  // };

 



  useEffect(() => {
    setMenuData(props.menuData);
  },[props.menuData]);


    return (
    
      <>
      {menuData?<>
      
      
      <div id="menuDetailContainer">
        
        <Modal open={props.detailModalOpen} >
        
          {/* <Box sx={style}
               id="menuDetailBox"
               component="form"
               noValidate
               autoComplete='off'
               //onSubmit={}      
          > */}
            
            <div className="modal" id="detailModal">
            
            <Card sx={style}>
            <CardHeader
              avatar={
                <StarIcon sx={{ color: yellow[500] }} aria-label="recommended" />
              }
              className="modal-title" align='center' 
              action={
              <IconButton edge="end" aria-label="modal-close" onClick={props.handleModalClose} >
                <ClearIcon />
              </IconButton>
              }
              title={menuData.menuName}
              subheader={menuData.menuCategory.menuCategoryName}
            />
            <CardMedia
              component="img"
              height="194"
              image={"/image/"+menuData.menuImage}
              alt="detail-image"
            />
            <CardContent>
              
              <br></br>
              <Typography paragraphvariant="body2" color="text.secondary">메뉴소개</Typography>
                <div>
                <TextField
                  id="menuDetailInfo-textField"
                  
                  multiline
                  fullWidth 
                  maxRows={1}
                  value={menuData.menuSimpleInfo}
                  onChange={onChange}
                  
                />
                </div>
              
              <br></br>  
              <Typography variant="h6" color="text.primary" align='right'>
                
                <div>
                  {menuData.menuPrice} 원
                </div>
                
              </Typography>  
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
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
                  value={menuData.menuDetailInfo}
                  onChange={onChange}
                  
                />
                </div>

              </CardContent>
            </Collapse>
            
            </Card>
            
            
            <br></br>
            
            <div>


            </div>
            <div>
            <Button type='reset' onClick={props.handleModalClose}>닫기</Button>
            </div>

            </div>
          {/* </Box> */}
        </Modal>
      </div>

      </>:""}
      </>
      
    );

  }

  export default MenuDetailModal;




