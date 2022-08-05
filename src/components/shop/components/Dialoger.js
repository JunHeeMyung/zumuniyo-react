import React, { useState } from 'react'
// import "../style.css"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Ckeditorwrite from './Ckeditorwrite';

function Article() {
  const [open, setOpen] = useState(false);

  return (
    <article style={{ border: '1px solid gray' }}>
      <h2>매장정보</h2>
      매장 정보 입력창
      <br />
      <ButtonGroup >
        <Button variant="outlined" onClick={() => {
          setOpen(true);
        }}
        >
          입력창</Button>
        {/* <Button variant="outlined">Update</Button> */}
        <Button variant="outlined">Delete</Button>
      </ButtonGroup>
      <Dialog open={open}>
        <DialogTitle>매장 정보</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Ckeditorwrite />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined">Create</Button>
          <Button variant="outlined" onClick={() => { setOpen(false); }}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </article>
  );
}

export default function Dialoger() {
  return (
    <div>
      <Article></Article>
    </div>
  );
}
