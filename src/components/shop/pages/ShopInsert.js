// import * as React from 'react';
import React, { useState, useContext } from 'react';
import { GlobalContext } from 'components/common/GlobalProvider';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import Ckeditorwrite from 'components/shop/components/Ckeditorwrite';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Address from 'components/shop/components/Address';
import Category from 'components/shop/components/Category';
import { useNavigate } from 'react-router-dom';


// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function SignUp() {
  const navigator = useNavigate();

  const { globalAxios } = useContext(GlobalContext);
  const [shopInsert, setShopInsert] = useState({});

  const handleCkeditorState = (event, editor) => {
    const data = editor.getData();
    setShopInsert({ ...shopInsert, shopDetail: data });
    console.log(data);
  }
  const handleChage = (e) => {

    setShopInsert({ ...shopInsert, [e.target.name]: e.target.value });


  };
  const handleChange2 = (category) => {
    setShopInsert({ ...shopInsert, shopCategory: category });
  };

  const handleChange3 = (location, shopAddrDetail) => {

    setShopInsert({
      ...shopInsert, shopAddrDetail: shopAddrDetail,
      locAddr: location.locAddr, locLat: location.locLat, locLon: location.locLon
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // 
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });

    globalAxios('/shop/shopInsert', 'post', shopInsert, res => {
      console.log(res);
      if (res) {
        console.log("입력성공");
        navigator("/LJW/shoplist");
      } else {
        console.log("입력실패");
      }

    });


  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            매장 등록
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="shopName"
                  name="shopName"
                  required
                  fullWidth
                  id="shopname"
                  label="매장명"
                  autoFocus
                  onChange={handleChage}

                />
              </Grid>

              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="매장번호"
                  name="phone"
                  autoComplete="family-name"
                />
              </Grid> */}

              <Grid item xs={12}>
                <Category handleChange2={handleChange2} />
              </Grid>

              <Grid item xs={12}>
                <Address handleChange3={handleChange3} />
              </Grid>

              <br />

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="shopInfo"
                  label="짧은 소개"
                  id="shopInfo"
                  autoComplete="new-password"
                  onChange={handleChage}
                />
              </Grid>


              <Grid item xs={12}>
                <CKEditor
                  onReady={editor => {
                    editor.ui
                      .getEditableElement()
                      .parentElement.insertBefore(
                        editor.ui.view.toolbar.element,
                        editor.ui.getEditableElement()
                      );
                  }}
                  editor={ClassicEditor}
                  data={shopInsert.shopDetail}
                  config={{ // (4)
                    // extraPlugins: [uploadPlugin],
                    language: 'ko'
                  }}
                  onChange={handleCkeditorState}

                />
                {/* <Ckeditorwrite sx={{ mt: 3, mb: 2 }} /> */}
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="매장등록을 하시겠습니까?"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              매장 등록
            </Button>

          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}