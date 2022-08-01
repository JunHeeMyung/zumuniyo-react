import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./CKcss.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


    const CkNoticeInsert = () => {
        const [board, setBoard] = useState({title:"", content:"", boardTop:0,writer:"관리자"});
        //const [content,setContent] = useState();
       

        const navigate = useNavigate();
       
        const handleCkeditorState = (event,editor) =>{
            const data = editor.getData();
            //setContent(data);
            //console.log(data);
            setBoard({ ...board, content:data});
        }

        const handleChange = (e) => {
          console.log(e);
          if(e.target.name === "boardTop")
              setBoard({ ...board, boardTop: e.target.checked?1:0 });
         else 
            setBoard({ ...board, [e.target.name]: e.target.value });
            
          console.log(board);
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log(board);
      
           axios({
            method: "post",
            url: "/NoticeBoard/NoticeInsert.go",
            data:board,
          })
            .then((res) => {
              console.log(res);
              alert(` 성공적으로 입력 되었습니다.`);
              navigate("/SWY");
            })
            .catch((error) => {
              console.log(error);
              throw new Error(error);
            });
        };

        
        return (
            <form id="empfrm" onSubmit={handleSubmit}>
            <div className="App">
            <div> <label>공지사항상단고정</label>
            <input
          // className="form-control"
          type="checkbox"
          name="boardTop"
          id="boardTop"
          onChange={handleChange}
          /></div>
            
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="title"
             placeholder='제목을 입력하세요'
             onChange={handleChange}
            />
          </div>
                <CKEditor

                    editor={ ClassicEditor }
                    // data={board.content}
                    config={{
                        placeholder: "내용을 입력하세요.",
                    }}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    // ( event, editor ) => {
                    //     const data = editor.getData();
                    //     console.log( { event, editor, data } );
                    // }
                     onChange={handleCkeditorState }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
                
            <div><input className="btn btn-primary" type="submit" value="입력하기" /></div>
            </div>
     
            </form>
        );
    
    };

export default CkNoticeInsert;