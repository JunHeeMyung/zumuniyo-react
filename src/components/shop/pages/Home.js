import React from 'react'

import Header2 from '../components/ShopHeader.js';
// import Button from '@mui/material/Button';
import Mylike from '../components/Mylike.js';

export default function home() {
  return (
    <div>

      {/* <Button variant="contained" color="success" href="/Shop">
        매장 관리
      </Button> */}
      <h1 align="center">매장명</h1>
      <Mylike />

      <Header2 />
    </div>
  )
}
