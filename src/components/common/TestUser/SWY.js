import CkNoticeInsert from "components/noticeboard/CkNoticeInsert";
import NoticeDelete from "components/noticeboard/NoticeDelete";
import NoticeDetail from "components/noticeboard/NoticeDetail";
import NoticeUpdate from "components/noticeboard/NoticeUpdate";
import CkNoticeUpdate from "components/noticeboard/CkNoticeUpdate";
import NoticeList from "components/noticeboard/NoticeList";
import React from "react";
import {Routes,Route} from 'react-router';
import AdInsert2  from "components/advertisement/AdInsert2";
import AdList from "components/advertisement/AdList";
import AdDetail from "components/advertisement/AdDetail";
import AdDelete from "components/advertisement/AdDelete";
const SWY = ()=> {
    return (
      <div>
          <h1>서원영 테스트 페이지</h1>
        
        <Routes>
          <Route path="/" element={<NoticeList/>} />
          <Route path="/NoticeBoard/NoticeDetail/:noticeBoardSeq" element={<NoticeDetail/>} />
          <Route path="/NoticeBoard/NoticeUpdate" element={<NoticeUpdate/>} />
          <Route path="/NoticeBoard/CkNoticeUpdate" element={<CkNoticeUpdate/>} />
          <Route path="/NoticeBoard/NoticeDelete" element={<NoticeDelete/>} />
          <Route path="/NoticeBoard/CkNoticeInsert" element={<CkNoticeInsert/>} />
          <Route path="/advertisement/AdList" element={<AdList/>} />
          <Route path="/advertisement/AdInsert2" element={<AdInsert2/>} />
          <Route path="/advertisement/AdDetail/:adSeq" element={<AdDetail/>} />
          <Route path="/advertisement/AdDelete" element={<AdDelete/>} />
        </Routes>

     
      </div>
    );
  }
  export default SWY;