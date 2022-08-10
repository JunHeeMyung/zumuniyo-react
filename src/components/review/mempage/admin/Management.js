import React, { useState, useEffect, useContext, useReducer } from "react";
import { GlobalContext } from "components/common/GlobalProvider";


import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from "components/review/components/Pagination";
import { Divider, FormControl, InputBase, InputLabel, NativeSelect, TextField } from "@mui/material";
import {Stack} from "@mui/material";
import { Button, Box } from "@mui/material";
import { event } from "jquery";

export default function Management() {
  const { globalAxios } = useContext(GlobalContext);
  const [any, forceUpdate] = useReducer(num => num + 1, 0);
  function handleChange11() {
    forceUpdate();
  }

  const [members, setMembers] = useState([]);
  const [memUp, setMemUp] = useState();
  const [member, setMember] = useState({});



  const memList = () => {
    globalAxios('/review/memList', 'post', {}, res => {
      if (res) {
        console.log(res);
        setMembers(res);
        console.log(members);

      } else {
        alert("failed to ");
      }
    });
  }

  

  function convertDate(longValue) {
    return new Date(longValue).toLocaleString();
  }
  useEffect(()=>{
    memList();
  }, []);

  useEffect(()=>{
  
  }, [members]);

  useEffect(()=>{
  
  }, [member]);



  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));

  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  // const handleChange = (e) => {
  //   console.log(e);
  //   setMemUp({ ...memUp, [e.target.name]: e.target.value });
  // };
  // const handleChangeType = (e) => {
  //   console.log(e);
  //   setMtype(e.target.value);
  // };

  // const onChange = e => {
  //   const { name , value } = e.target;
  //   console.log(e.target.name);
  //   console.log(e.target.value);    
  //   setMembers({...members, [e.target.name] : e.target.value });
  // }

  const [mtype, setMtype] = useState('');
  const [msta, setMsta] = useState('');

  const handleChange2 = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    // setMtype({...mtype, [e.target.name] : e.target.value });
    // setMtype(event.target.value);
    // console.log(a);
    // console.log(b);
    setMember({...member, [e.target.name] :e.target.value  });
    handleChange11();
  };

  const handleChange3 = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setMember({...member, [e.target.name] :e.target.value  });
    // setMsta(event.target.value);
    // console.log(event.target.value);
    

  };
  const handleChange4 = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setMember({...member, [e.target.name] :e.target.value  });

    // setMsta(event.target.value);
    // console.log(event.target.value);
    

  };

const changvaluetest = (e)=>{


}

  const handleSubmit = (e) => {

    // e.preventDefault();
    
    console.log('handleSubmit들어옴');
    setMember({...member, memSeq :e.target.value  });  
    
    console.log(e.target.value);
    // console.log(e.target.datamid);
    // console.log(member);


    globalAxios('/review/memManage/', 'put', member, response => {
      console.log("respose");
      console.log(response);
      if (response === '성공') {
        //setShow(true);  //성공알림
      } else {
        alert("failed to ");
      }
    });
  };


  return (
    <>
      {/* {JSON.stringify(members)} */}
      {/* {members?member.as : ""} */}

      <Divider><h1>회원관리</h1></Divider>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">회원번호</StyledTableCell>
              <StyledTableCell align="center">닉네임</StyledTableCell>
              <StyledTableCell align="center">이메일</StyledTableCell>
              <StyledTableCell align="center">가입일자</StyledTableCell>
              <StyledTableCell align="center">회원분류</StyledTableCell>
              <StyledTableCell align="center">가입종류</StyledTableCell>
              <StyledTableCell align="center">회원상태</StyledTableCell>
              <StyledTableCell align="center">수정</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.slice(offset, offset + limit).map((data, index) => (

              <StyledTableRow key={index} >               
                {/* <form id="memberManager" onSubmit={handleSubmit}> */}
                {/* <Box   component="form" id="memberManager" onSubmit={handleSubmit}> */}    
                {/* <Stack component="form" noValidate onSubmit={handleSubmit} spacing={2} sx={{ m: 2, width: '25ch' }}>           */}
                <StyledTableCell component="th" scope="row" >
                  {data.memSeq}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <TextField id="outlined-basic" name="memNick" label={data.memNick} variant="filled" defaultValue={data.memNick}  onChange={handleChange4}/>
                </StyledTableCell>
                <StyledTableCell align="center">{data.memEmail}</StyledTableCell>
                <StyledTableCell align="center">{convertDate(data.memRegdate)}</StyledTableCell>
                <StyledTableCell align="center">
                  <FormControl sx={{ m: 1 }} variant="standard">
                    {/* <InputLabel htmlFor="demo-customized-select-native">회원분류</InputLabel> */}
                    <NativeSelect
                      id="demo-customized-select-native"
                      name="memType"
                      // value={data.memType}
                      // onChange={handleChange2(data.memType, index, "memType")}
                      onChange={handleChange2}
                      defaultValue={data.memType}
                      input={<BootstrapInput />}
                      // value={mtype}
                    >
                      {/* <option aria-label="None" value={data.memType}/> */}
                      {/* <option aria-label="None" value=""/> */}
                      <option value={"관리자"}>관리자</option>
                      <option value={"사업자회원"}>사업자회원</option>
                      <option value={"일반회원"}>일반회원</option>
                    </NativeSelect>
                  </FormControl>
                </StyledTableCell>
                {/* <StyledTableCell align="center">{data.memType}</StyledTableCell> */}
                <StyledTableCell align="center">{data.socialType}</StyledTableCell>
                <StyledTableCell align="center">
                  <FormControl sx={{ m: 1 }} variant="standard">
                    {/* <InputLabel htmlFor="demo-customized-select-native">회원분류</InputLabel> */}
                    <NativeSelect
                      id="demo-customized-select-native"
                      name="memStatus"
                      // value={data.memStatus}
                      onChange={handleChange3}
                      defaultValue={data.memStatus}
                      input={<BootstrapInput />}
                    >
                      {/* <option aria-label="None" >{data.memStatus}</option> */}
                      <option value={"활성"}>활성</option>
                      <option value={"비활성"}>비활성</option>
                      <option value={"정지"}>정지</option>
                    </NativeSelect>
                  </FormControl>
                </StyledTableCell>
                {/* <StyledTableCell align="center">{data.memStatus}</StyledTableCell> */}
                <StyledTableCell align="center">
                  <Button variant="contained" type="submit" value={data.memSeq} onClick={handleSubmit}>수정</Button>
                </StyledTableCell>                       
                {/* </Box>          */}
                {/* </form> */}
                {/* </Stack>    */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination total={members.length} limit={limit} page={page} setPage={setPage} />

    </>
  )
}
