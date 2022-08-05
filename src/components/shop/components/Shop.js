// 기존의 shop.js 복사본

import React from 'react'
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import $ from 'jquery';
import Dialog from './Dialoger.js';
// import Grid from '@mui/material/Grid';

export default function InputAdornments() {
  const [values, setValues] = React.useState({
    amount: '',
    weight: '',
    weightRange: '',
  });

  const { daum } = window;
  const { kakao } = window;

  const findAddr = () => {
    new daum.Postcode({
      oncomplete: data => {
        const geocoder = new daum.maps.services.Geocoder();
        const address = data.roadAddress || data.autoRoadAddress;
        geocoder.addressSearch(address, (result, status) => {
          if (status === kakao.maps.services.Status.OK) {
            $("#addr").val(address);
            $("#latitude").val(result[0].y);
            $("#longitude").val(result[0].x);
          };
        });
      }
    }).open();
  };


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center' }}>
        <div>
          <TextField
            label="매장명"
            id="standard-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start">이름</InputAdornment>,
            }}
            variant="standard"
          />
        </div>
        <div>
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
            <Input
              id="standard-adornment-weight"
              value={values.weight}
              onChange={handleChange('weight')}
              startAdornment={<InputAdornment position="end">전화번호</InputAdornment>}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
            <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
          </FormControl>
        </div>
        <div>
          <FormControl fullWidth sx={{ m: 1, mt: 3, width: '50ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">짧은 소개</InputLabel>
            <Input
              id="standard-adornment-amount"
              value={values.amount}
              onChange={handleChange('amount')}
              startAdornment={<InputAdornment position="start">소개글</InputAdornment>}
            />

          </FormControl>
        </div>

        <div>
          <input id="addr" name="loc_addr" type="text" readOnly />
          <button id="findaddr" onClick={findAddr} >주소검색</button>
          <input id="latitude" name="loc_lat" type="hidden" readOnly />
          <input id="longitude" name="loc_lon" type="hidden" readOnly />

        </div>

        <div>
          <FormControl fullWidth sx={{ m: 1, mt: 3, width: '50ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">상세 주소</InputLabel>
            <Input
              id="standard-adornment-amount"
              value={values.amount}
              onChange={handleChange('amount')}
              startAdornment={<InputAdornment position="start">상세 주소</InputAdornment>}
            />

          </FormControl>
        </div>

        <Dialog />

        <button>매장 등록</button>
      </Box>

      {/* <Dialog /> */}


    </div>


  );
}
