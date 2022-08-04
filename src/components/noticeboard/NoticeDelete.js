import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const NoticeDelete = () => {
  const location = useLocation();
  const noticeBoardSeq = location.state.noticeBoardSeq;

  let navigate = useNavigate();
  useEffect(()=>{
      console.log(noticeBoardSeq);
      axios({
        method: "delete",
        url: `/noticeboard/NoticeDelete.do/${noticeBoardSeq}`,
      })
        .then((res) => {
          console.log(res);
          alert(`성공적으로 삭제 되었습니다.`);
          navigate("/SWY");
        })
        .catch((error) => {
          console.log(error);
          throw new Error(error);
        });

      },[])
    
   
    
    
  return <div></div>;
    }

export default NoticeDelete;

