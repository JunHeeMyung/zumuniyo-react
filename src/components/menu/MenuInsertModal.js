import React,{useContext, useEffect, useState} from 'react';

import "./MenuInsertModal.css";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { GlobalContext } from 'components/common/GlobalProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor } from '@ckeditor/ckeditor5-build-classic';



const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '1px solid gray',
  boxShadow: 18,
  p: 4,

  borderRadius: 2,
  
};



const MenuInsertModal = (props) => {
    
    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    
    const navigate = useNavigate();
    const location = useLocation();

    const { logined, memType, globalAxios, backLocation} = useContext(GlobalContext);

    const [disabled, setDisabled] = useState(false);

    const [menuCategoryList, setMenuCategoryList] = useState('');

    const [menuCategorySeq,setMenuCategorySeq] = useState(0);

    const [menuInsert, setMenuInsert] = useState({
        // shop : (shop)
		menuName : '',
        // menuCategory : (menuCategory),
		menuPrice : 0, 
		menuImage : '',
		menuTop : 0,
		menuSimpleInfo : '',
		menuDetailInfo : '',
		// menuStatus : (MenuStatus.활성)

    });

    const onChange = event => {
        const { name , value } = event.target;
        setMenuInsert({ ...menuInsert, [name] : value });
    };



    // const menuNameCheck = () => {
    //     if(menu.menuName === '') navigate(Location);
    // };

    const insertResult = result => {
        props.getMenuList(props.shopSeq);
        closeModal();
        alert(result);
    };

    
    const [shopSeq, setShopSeq] = useState(props.shopSeq);

    const onSubmit = async(event) => {
        setDisabled(true);
        console.log(menuInsert);
        
        console.log(shopSeq);
        event.preventDefault();
        await new Promise((r) => setTimeout(r, 1000));
        
        // alert(menuCategorySeq);

        globalAxios(`/menu/menuInsert/${shopSeq}`, 'post', 
        {
            menuName:menuInsert.menuName,
            menuPrice:menuInsert.menuPrice,
            menuImage:menuInsert.menuImage,
            menuTop:menuInsert.menuTop,
            menuSimpleInfo:menuInsert.menuSimpleInfo,
            menuDetailInfo:menuInsert.menuDetailInfo,
            menuCategorySeq:menuCategorySeq
        }, 
        result=>{insertResult(result)});
        setDisabled(false);
    };



    //const [show, setShow] = useState(false);
    const [image, setImage] = useState();
    const [flag, setFlag] = useState(false);


    useEffect(
        () => {
            getMenuCategory(props.shopSeq);
        },[showModal]
     );



    const getMenuCategory = shopSeq => {
        globalAxios('/menu/menucategory/'+shopSeq, 'get', {}, data=>{setMenuCategoryList(data)});
    }

    const onChangeSelect = (e) => {
        setMenuCategorySeq(e.target.value);
    }


    return (
      <>
      
      <div id="menuInsertContainer">
        <Button onClick={openModal}>메뉴등록</Button>
        
        <Modal open={showModal}>       
          <Box sx={style}
               id="menuInsertBox"
               component="form"
               noValidate
               autoComplete='off'
               onSubmit={onSubmit}  
          >

          <div className="modal" id="insertModal">
            <div className="modal-dialog">
            <div className="modal-content">
        
            <div className="modal-header">
            <button className='modal-close' onClick={closeModal}> X </button>
            <h4 className="modal-title" align='center'>메뉴 추가</h4>            
            </div>      
            <hr></hr>

            <div className="modal-body form-group" >
            
            <TextField sx={{ m: 1, width: '25ch' }} variant='standard' 
                    name="menuName"
                    label="메뉴이름"
                    value={menuInsert.menuName}
                    helperText="한글 2~16자 이내 입력"
                    onChange={onChange}
            />
            <br></br>

            <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="menucategory-inputlabel">카테고리</InputLabel>
                <Select
                    labelId="menucategory-selectlabel"
                    id="menuCategorySeq"
                    value={menuCategorySeq}
                    onChange={onChangeSelect}
                >
                    <MenuItem value="">
                    
                    </MenuItem>
                    {Object.values(menuCategoryList).map(category=>

                        <MenuItem key={category.menuCategorySeq} value={category.menuCategorySeq}> {category.menuCategoryName} </MenuItem>
                        
                    )} 

                </Select>
            </FormControl>
            </div>                

            


            <TextField type="number" InputProps={{ inputProps: { max: 99999999, min: 0 }
                    }} sx={{ m: 1, width: '25ch' }} variant='standard' 
                    name="menuPrice"
                    label="가격"
                    value={menuInsert.menuPrice}
                    helperText="숫자만 입력"
                    onChange={onChange}        
            />
            <br></br>
            
            <TextField sx={{ m: 1 }} variant="filled"
                name="menuSimpleInfo"
                label="메뉴소개"
                multiline
                fullWidth 
                maxRows={4}
                value={menuInsert.menuSimpleInfo}
                onChange={onChange}
            />
            <br></br>
            
            <TextField sx={{ m: 1 }} variant="filled" 
                name="menuDetailInfo"
                label="메뉴상세"
                multiline
                fullWidth 
                rows={4}
                value={menuInsert.menuDetailInfo}
                onChange={onChange}
            />
            <br></br>


            <br></br>
            <FormControl sx={{ m: 1 }}>
                <FormLabel>추천메뉴여부</FormLabel>
                <RadioGroup 
                    row
                    defaultValue="0"
                    name="menuTop"
                    onChange={onChange}
                >
                    <FormControlLabel value="1" control={<Radio sx={{color: 'rgb(160, 160, 160)','&.Mui-checked': {color: 'rgb(50, 50, 50)',}}}/> } label="예"  />
                    <FormControlLabel value="0" control={<Radio sx={{color: 'rgb(160, 160, 160)','&.Mui-checked': {color: 'rgb(50, 50, 50)',}}}/> } label="아니오" />
                </RadioGroup>
            </FormControl>
            
            <br></br>
            <br></br>

            <hr></hr>
            <button type='submit' disabled={disabled}>등록하기</button>
            <button type='reset' onClick={closeModal}>취소</button>
            

            </div>
        
        </div>
      </div>
    </div>
  

          </Box>
        </Modal>
      </div>
        
      </>
    );
  }

  export default MenuInsertModal;




