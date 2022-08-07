import React,{useContext,useEffect, useState, useRef} from 'react';
import {GlobalContext} from "components/common/GlobalProvider";
import { useLocation } from 'react-router';
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { List, ListItem, ListItemText, TableBody, TableCell, TableRow } from '@mui/material';


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


const MenuDetailModal = (props) => {

  
  const ref = useRef(null);
  
  const [menuData,setMenuData] = useState('');
  const [menuDetail,setMenuDetail] = useState('');
  
  const [text, setText] = useState('테스트');
  const [editable, setEditable] = useState(false);


  

  const editOn = () => {
    setEditable(true);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // const handleChangeData = (e) => {
  //   setMenuData(e.target.value);
  // };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setEditable(!editable);
    }
  };

  const handleClickOutside = (e) => {
    if (editable == true && !ref.current.contains(e.target)) setEditable(false);
  };

  // const getMenuDetail = menuSeq => {
  //   globalAxios('/menu/menudetail/'+menuSeq, 'get', {}, result=>{setMenuDetail(result)});
  // }





  useEffect(() => {
    setMenuData(props.menuData);
  },[props.menuData]);


    return (
    
      <>
      {menuData?<>
      
      
      <div id="menuDetailContainer">
        
        <Modal open={props.detailModalOpen} >
        
          <Box sx={style}
               id="menuDetailBox"
               component="form"
               noValidate
               autoComplete='off'
               //onSubmit={}  
                
          >
            
            <div className="modal" id="detailModal">
            <div className="modal-dialog">
            <div className="modal-content">
        
            <div className="modal-header">
            <button className='modal-close' onClick={props.handleModalClose}> X </button>
            <h4 className="modal-title" align='center'>메뉴상세</h4>            
            </div>      
            <hr></hr>
            <br></br>


            <div>
            {menuData.menuSeq}
            {menuData.menuCategory.menuCategoryName}

            </div>
            
            <div ref={ref}>
            {editable ? (
            <input type="text" value={text} onChange={(e) => handleChange(e)} onKeyDown={handleKeyDown} />
            ) : (
            <div onClick={() => editOn()}>{text}</div>
            )}
            </div>
            
            {/* <div ref={ref}>
            {editable ? (
            <input type="text" value={menuData} onChange={(e) => handleChangeData(e)} onKeyDown={handleKeyDown} />
            ) : (
            <div onClick={() => editOn()}>{menuData}</div>
            )}
            </div> */}
            
            {/* <div>
            <List
              sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
        
             >
             {Object.values(menuData).map((entrie) => (
             <ListItem disablePadding 
               key={entrie.menuSeq}
          
               >
              <ListItemText primary={entrie.menuName} />

              </ListItem>
              ))}
            </List> 
          
            </div> */}
            
            <div>


            </div>








            </div>
            <br></br>
            <hr></hr>
            
            <div>
            <Button type='reset' onClick={props.handleModalClose}>닫기</Button>
            </div>
            </div>
            </div>
          </Box>
        </Modal>
      </div>

      </>:""}
      </>
      
    );

  }

  export default MenuDetailModal;




