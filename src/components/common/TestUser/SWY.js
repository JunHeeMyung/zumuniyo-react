import CkNoticeInsert from "components/noticeboard/CkNoticeInsert";
import NoticeDelete from "components/noticeboard/NoticeDelete";
import NoticeDetail from "components/noticeboard/NoticeDetail";
import NoticeInsert from "components/noticeboard/NoticeInsert";
import NoticeList from "components/noticeboard/NoticeList";
import NoticeUpdate from "components/noticeboard/NoticeUpdate";
import CkNoticeUpdate from "components/noticeboard/CkNoticeUpdate";
import NoticeList2 from "components/noticeboard/NoticeList2";

import React from "react";
import {Routes,Route} from 'react-router'
const SWY = ()=> {
    return (
      <div>
          <h1>서원영 테스트 페이지</h1>
        
        <Routes>
          <Route path="/" element={<NoticeList2/>} />
          <Route path="/NoticeBoard/NoticeInsert" element={<NoticeInsert/>} />
          <Route path="/NoticeBoard/NoticeDetail/:noticeBoardSeq" element={<NoticeDetail/>} />
          <Route path="/NoticeBoard/NoticeUpdate" element={<NoticeUpdate/>} />
          <Route path="/NoticeBoard/CkNoticeUpdate" element={<CkNoticeUpdate/>} />
          <Route path="/NoticeBoard/NoticeDelete" element={<NoticeDelete/>} />
          <Route path="/NoticeBoard/CkNoticeInsert" element={<CkNoticeInsert/>} />
        </Routes>

     
      </div>
    );
  }
  export default SWY;