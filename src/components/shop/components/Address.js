import React from 'react'
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';

import $ from 'jquery';
import { Button, TextField } from '@mui/material';

export default function Address() {
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
    <Box>
      <div>
        <Input id="addr" name="loc_addr" type="text" readOnly />
        <Button variant="outlined" id="findaddr" onClick={findAddr} >주소검색</Button>
        <Input id="latitude" name="loc_lat" type="hidden" readOnly />
        <Input id="longitude" name="loc_lon" type="hidden" readOnly />

      </div>

      <div style={{ marginTop: "16.5px" }}>
        <TextField
          autoComplete="shopDetailAddress"
          name="shopDetailAddress"
          required
          fullWidth
          id="shopDetailAddress"
          label="상세주소"
          autoFocus
        >
          <InputLabel htmlFor="standard-adornment-amount">상세 주소</InputLabel>
          <Input
            id="standard-adornment-amount"
            value={values.amount}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">상세 주소</InputAdornment>}
          />
        </TextField>
      </div>
    </Box>
  )
}
