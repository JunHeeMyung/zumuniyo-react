// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from  "react-router-dom";
import React,{ useContext,useEffect,useState} from "react";
import {GlobalContext} from "components/common/GlobalProvider";
import {  useNavigate,useLocation } from "react-router-dom";
import Pagination from './Pagination';


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

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
 
// ];
const CustomizedTables= () => {
 

  const {globalAxios} = useContext(GlobalContext);
  const [Adlist,setAdlist] = useState([]);
  const getAdList = () => {
    globalAxios("/advertisement/adlist","get",{},data=>{
      console.log(data);
      setAdlist(data);
    })
  }
  const [limit,setLimit] = useState(5);
  const [page,setPage] = useState(1);
  const offset = (page-1 )*limit;
  let navigate = useNavigate();
  useEffect(() => {

    getAdList();

  }, []); 


  return (

    <div>
   <TableContainer component={Paper}>
      
        <Link to="/SWY/advertisement/AdInsert2">
        <button className="insertAdvertisement">광고등록</button>
        </Link>
      
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>광고주</StyledTableCell>
            <StyledTableCell >기간</StyledTableCell>
            <StyledTableCell >click count</StyledTableCell>
            <StyledTableCell >view count</StyledTableCell>

           
          </TableRow>
        </TableHead>
        <TableBody>
          {Adlist.map((list) => (
         
            <StyledTableRow key={list.owner}>
              <StyledTableCell component="th" scope="row">
               <Link to ={`/SWY/advertisement/AdDetail/${list.adSeq}`} >
                {list.owner}
                </Link>
              </StyledTableCell>
              <StyledTableCell >{ new Date(list.startTime).toJSON().split("T")[0]}~{ new Date(list.endTime).toJSON().split("T")[0]}</StyledTableCell>
              <StyledTableCell >{list.clickCount}</StyledTableCell>
              <StyledTableCell >{list.viewCount}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     <Pagination total={Adlist.length} limit={limit} page={page} setPage={setPage}/>
     </div>
  );
};
export default CustomizedTables;