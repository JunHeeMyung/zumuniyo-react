import { useLocation, useParams } from "react-router";
import axios from "axios";
import React , { useContext ,useEffect,useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
const SearchResult = ()=> {
 
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

 const location = useLocation();
 const shoplist = location.state.shoplist; 
 console.log("샵: "+shoplist);
 return(

  <TableContainer component={Paper}>
      
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>가게이름</StyledTableCell>
            <StyledTableCell >샵정보</StyledTableCell>
            <StyledTableCell >카테고리</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shoplist.map((list) => (
         
            <StyledTableRow  key={list.adSeq}>
              <StyledTableCell component="th" scope="row">
                {list.shopSeq}
              </StyledTableCell>
              <StyledTableCell >{list.shopInfo}</StyledTableCell>
              <StyledTableCell >{list.shopCategory}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  
  
  

 )
};
export default SearchResult;