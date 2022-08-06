import React, { useState, useEffect, useContext } from "react";

import { GlobalContext } from "components/common/GlobalProvider";
import { Button, Divider, Input, Box } from "@mui/material";

export default function NickModify() {

  const { logined, memNick, memType, globalAxios } = useContext(GlobalContext);

  const [newNick, setNewNick] = useState('');

  const shopMemInfo = () => {
    globalAxios(`/review/nickchange/${newNick}`, 'post', {}, response => {
      if (response) {
        console.log(response);
      } else {
        alert("failed to ");
      }
    });
  }

  const handleChange = (e) => {
    // console.log(e);
    setNewNick(e.target.value)
    console.log(newNick);

  }


  // const Viewer = () => (
  //   <div>
  //     {memType === '사업자회원' ? <h1>사업자회원</h1> : memType === '일반회원' ? <h1>일반회원</h1> : <h1>둘다아님</h1>}
  //   </div>
  // );


  return (
    <div>
      {/* <form id="rewviewfrm" onSubmit={shopMemInfo}>
        <Viewer />
        <Divider />
        <p>회원분류 : {memType}</p>
        
        <p>닉네임   : <Input name="newNick" defaultValue={memNick} onChange={handleChange}></Input></p>
        <Button type="submit" variant="contained" color="primary" >입력하기</Button>
        <br />
      </form> */}


      <Box
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
        

          <Box style={{ margin: "0 auto" }}
            sx={{ width: "30%" }}>
            <div>
            <p>회원분류 : {memType}</p>
            <Divider />
              <p style={{ margin: "0 auto", textAlign: "center" }}>                
              닉네임   : <Input name="nick" defaultValue={memNick} onChange={handleChange}></Input>
              </p>
              <br />
            </div>
          </Box>

            <div style={{ margin: "0 auto", textAlign: "center" }}>
              <Button  variant="contained" color="primary" onClick={shopMemInfo} >입력하기</Button>
            </div>
    </Box>
            
    </div >
  )
}
