import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./CKcss.css";

const CkNoticeUpdate = () => {
    const location = useLocation();
    const originalNotice = location.state.notice;
    const [notice, setNotice] = useState(originalNotice);
    let navigate = useNavigate();
    console.log(notice);

    const[show,setShow ] = useState(false);
    const[image,setImage] = useState();
    const[flag,setFlag] = useState(false);

    const imgLink = `${process.env.PUBLIC_URL}/images`

    const customUploadAdapter = (loader)=>{
        return {
            upload(){
                return new Promise((resolve,reject)=> {
                    const data = new FormData();
                    loader.file.then((file)=>{
                        data.append("name",file.name);
                        data.append("file",file);

                        console.log("AA:", file);
                        console.log(data);

                        axios.post('/noticeboard/NoticeUpload.do',data)
                        .then((res)=>{
                            if(!flag){
                                setFlag(true);
                                setImage(`${imgLink}/${file.name}`);
                            }
                            resolve({
                                default:`${imgLink}/${file.name}`
                            })
                        })
                        .catch((err)=>reject(err));
                    })
                })
            }
        }
    }
    function uploadPlugin(editor){
        editor.plugins.get('FileRepository').createUploadAdapter = (loader)=>{
            return customUploadAdapter(loader);
        }
    }

    
    //   const Viewer = ({ content }) => (
    //     <div style={{ width: "640", height: "200" }}
    //       className="ck-content"
    //       dangerouslySetInnerHTML={{ __html: content }}
    //     ></div>)

    const handleChange = (e) => {
        console.log(e);
        setNotice({ ...notice, [e.target.name]: e.target.value });
    };
    //   function convertDate(longValue) {
    //     return new Date(longValue).toJSON().split("T")[0];
    //   }
    const handleCkeditorState = (event,editor) =>{
        const data = editor.getData();
        //setContent(data);
        //console.log(data);
        setNotice({ ...notice, content:data});
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("저장:", notice);

    axios({
      method: "post",
      url: "/noticeboard/NoticeUpdate.do",
      data: notice,
    }).then((res) => {
        console.log(res);
        alert(`변경사항이 성공적으로 저장되었습니다.`);
        navigate("/zumuniyo/Noticeboard/NoticeList");
      }).catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  }; //submit end

  /*  emp-view-wrapper"
  emp-view-row */
  return (
    <>
      <h2 align="center"> 공지사항 내용수정!!!!!</h2>
      <form id="noticefrm" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="title"
             placeholder='제목을 입력하세요'
             onChange={handleChange}
             value={notice.title}
            />
          </div>
       <div className="form-group">
        <CKEditor
            editor={ ClassicEditor }
            data={notice.content}
            config={{
                extraPlugins:[uploadPlugin],
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
        </div> 
       
        <input className="btn btn-primary" type="submit" value="수정하기" />
        <input className="btn btn-secondary" type="reset" value="취소하기" />
        <input
          className="btn btn-secondary"
          type="button"
          value="목록보기"
          id="empList"
        />
      </form>
    </>
  );
};
export default CkNoticeUpdate;
