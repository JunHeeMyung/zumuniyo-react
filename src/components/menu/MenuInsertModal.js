import React,{useContext, useEffect, useState} from 'react';

import "./MenuInsertModal.css";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { GlobalContext } from 'components/common/GlobalProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';



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

    const {globalAxios, backLocation} = useContext(GlobalContext);

    const [disabled, setDisabled] = useState(false);

    const [menu, setMenu] = useState({
        // shop : (shop),
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
        setMenu({ ...menu, [name] : value });
    };


    // const menuNameCheck = () => {
    //     if(menu.menuName === '') navigate(Location);
    // };

    const insertResult = result => {
        alert(result);
        if(result==="메뉴 등록이 완료되었습니다.") navigate(backLocation);
    };

    const onSubmit = async(event) => {
        setDisabled(true);
        event.preventDefault();
        await new Promise((r) => setTimeout(r, 1000));
        globalAxios('/menu/' + menu.shop + '/', 'post', menu, result=>{insertResult(result)});
        setDisabled(false);
    };

    

    // useEffect(
    //     () => {
    //         menuNameCheck();
    //     }, [menuNameCheck]  
    // );




    return (
      <>
      
      <div id="menuInsert">
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
                    value={menu.menuName}
                    helperText="한글 2~16자 이내 입력"
                    onChange={onChange}
            />
            <br></br>

            <TextField type="number" InputProps={{ inputProps: { max: 99999999, min: 0 }
                    }} sx={{ m: 1, width: '25ch' }} variant='standard' 
                    name="menuPrice"
                    label="가격"
                    value={menu.menuPrice}
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
                value={menu.menuSimpleInfo}
                onChange={onChange}
            />
            <br></br>
            
            <TextField sx={{ m: 1 }} variant="filled" 
                name="menuDetailInfo"
                label="메뉴상세"
                multiline
                fullWidth 
                rows={4}
                value={menu.menuDetailInfo}
                onChange={onChange}
            />
            <br></br>

            <br></br>
            <FormControl sx={{ mx: 1 }}>
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




