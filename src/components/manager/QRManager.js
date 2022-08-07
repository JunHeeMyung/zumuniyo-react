import React,{ useEffect, useState} from "react";
import $ from "jquery";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from "@mui/system";
import Paper from '@mui/material/Paper';
import QrCodeIcon from '@mui/icons-material/QrCode';
import {useParams} from "react-router-dom";

const QRManager = (props)=> {

    const params = useParams();
    const [count,setCount] = useState(1);

    const getContextPath = () => {
        const hostIndex = window.location.href.indexOf( window.location.host ) + window.location.host.length;
        return window.location.href.substring( hostIndex, window.location.href.indexOf('/', window.hostIndex + 1) );
    };

    const createQRCode = () => {
		
		const count = $("#qrcodenumber").val();
		
		if(count===0){
			alert("갯수를 확인해주세요 ( 1~30개 )");
			return;
		}
		if(!params.shopSeq){
			alert("매장번호가 없습니다");
			return;
		}
		
		var str = "";
		
		for(let i=1;i<=count;i++){
			
			str+="<table class='qrtable' style='display: inline-block;'><tr><td>"
                    +i+"번 테이블</td></tr><tr><td><img src='/image/qrcode/"
                    +
                    (window.location.protocol+getContextPath()+"/zumuniyo/shop/"+params.shopSeq+"/"+i)
                    +"'></td><tr></table>";
		}
		
		$("#qrcodetable").html(str);
	};

    const printQRcode = () => {

        let initBody;
        window.onbeforeprint = () => {
            initBody = document.body.innerHTML;
            document.body.innerHTML = document.getElementById('qrcodetable').innerHTML;
		};
		
        window.onafterprint = () => {
            document.body.innerHTML = initBody;
		};
		
		window.print();
		window.location.reload();

    }

    useEffect(
        () => { 
  
  
        },[]
      );

    return (
      <>
        <Box    display="flex"
                justifyContent="center"
                alignItems="center">

            <Paper sx={{ width: '100%',
                         overflow: 'hidden',
                         maxWidth:'50em',
                         textAlign:'center',
                         paddingTop:'2em',
                         paddingBottom:'2em',
                         }}>

                <h2> <QrCodeIcon/> QR 코드 관리</h2>

                <TextField
                    value={count}
                    onChange={e=>{setCount(e.target.value)}}
                    InputProps={{ inputProps: { min: 1, max: 30 } }}
                    required
                    id="qrcodenumber"
                    label="테이블 갯수"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="standard"
                    sx={{ width: '80%'}}
                />
                <hr />
                <div id="qrcodetable"></div>
                <hr/>
                <Stack spacing={5} direction="row" justifyContent="center">
                    <Button variant="outlined" onClick={createQRCode}>QR 코드생성</Button>
                    <Button variant="outlined" onClick={printQRcode}>QR 코드인쇄</Button>
                </Stack>


                <div></div>
            </Paper>
        </Box>
       
      </>
    );
  }
  export default QRManager;