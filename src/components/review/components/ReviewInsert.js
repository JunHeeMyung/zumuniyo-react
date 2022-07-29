import React from 'react'
import { useState } from "react";

import axios from "axios";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Alert from '@mui/material/Alert';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button } from '@mui/material';


export default function ReviewInsert() {

  const [reviewInsert, setReviewInsert] = useState({});

  const handleCkeditorState = (event, editor) => {
    const data = editor.getData();
    setReviewInsert({ ...reviewInsert, reviewContent: data });
    console.log(data);
  }


  // const navigate = useNavigate();
  const handleChange = (e) => {
    console.log(e);
    setReviewInsert({ ...reviewInsert, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(reviewInsert);

    axios({
      method: "post",
      url: "/review/reviewInsert",

      data: reviewInsert

    })
      .then((res) => {
        console.log(res);
        console.log(reviewInsert);
        setShow(true);  //성공알림

      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  };

  const [show, setShow] = useState(false);
  const [image, setImage] = useState();
  const [flag, setFlag] = useState(false);

  const imgLink = `${process.env.PUBLIC_URL}/img`

  const customUploadAdapter = (loader) => { // (2)
    return {
      upload() {
        return new Promise((resolve, reject) => {
          const data = new FormData();
          loader.file.then((file) => {
            data.append("name", file.name);
            data.append("file", file);
            console.log(data);

            axios.post('/review/upload', data)
              .then((res) => {
                if (!flag) {
                  setFlag(true);
                  setImage(`${imgLink}/${file.name}`);
                }
                resolve({
                  default: `${imgLink}/${file.name}`
                });
              })
              .catch((err) => reject(err));
          })
        })
      }
    }
  }

  function uploadPlugin(editor) { // (3)
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return customUploadAdapter(loader);
    }
  }




  return (
    <>

      <Box style={{ margin: "0 auto" }}
        sx={{
          width: "80%",
          position: 'relative',
          minHeight: 500,
        }}>
        <Box sx={{ width: '100%' }} spacing={2}>
          {show &&
            <Alert
              onClose={() => setShow(false)}
              severity="info"
            >
              성공적으로 입력 되었습니다.
            </Alert>}
        </Box>



        <Box
          sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
          <form id="rewviewfrm" onSubmit={handleSubmit}>
            <h1>입력 테스트</h1>

            <Box style={{ margin: "0 auto" }}
              sx={{
                width: "30%",
                // position: 'relative',        
              }}>
              <div>
                <p style={{ margin: "0 auto", textAlign: "center" }}>

                  양<br />
                  <Rating name="reviewAmount" size='large' precision={0.5} defaultValue={0} onChange={handleChange} />
                </p>
                <br />
              </div>
              <div>
                <p style={{ margin: "0 auto", textAlign: "center" }}>
                  서비스<br />
                  <Rating name="reviewService" size='large' precision={0.5} defaultValue={0} onChange={handleChange} />
                </p>
                <br />
              </div>
              <div>
                <p style={{ margin: "0 auto", textAlign: "center" }}>
                  맛<br />
                  <Rating name="reviewTaste" size='large' precision={0.5} defaultValue={0} onChange={handleChange} />
                </p>
                <br />
              </div>
            </Box>
            <div>
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
                data={reviewInsert.reviewContent}
                config={{ // (4)
                  extraPlugins: [uploadPlugin]
                }}
                onChange={handleCkeditorState}
              />
            </div>
            <br />
            <div style={{ margin: "0 auto", textAlign: "center" }}>
              <Button type="submit" variant="contained" color="primary" >입력하기</Button>
            </div>


            {/* <div className='form-goup'>
              <input type="submit" name="submit" className="btn btn-secondary" value={"입력하기"} />
            </div> */}
          </form>
        </Box>
      </Box>
    </>
  )
}
