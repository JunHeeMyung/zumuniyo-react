import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "components/common/GlobalProvider";
// import axios from "axios";

export default function Management() {
  const { globalAxios } = useContext(GlobalContext);


  const [members, setMembers] = useState([]);

  const memList = () => {
    globalAxios('/review/memList', 'post', {}, res => {      
      if (res) {
        console.log(res);        
        setMembers(res);            
        console.log(members);        
        
      } else {
        alert("failed to ");
      }
    });
  }
  

  function convertDate(longValue) {
    return new Date(longValue).toLocaleString();
  }
  useEffect(memList, []);

  return (
    <div>
      <h1>회원관리</h1> 
      
      <table>
        <thead>
          <tr>
            <th >회원번호</th>
            <th >닉네임</th>
            <th >이메일</th>
            <th >가입일자</th>
            <th >회원분류</th>
            <th >회원상태</th>
            <th >네이버/카카오</th>
          </tr>
        </thead>
        <tbody>
          {members.map((mem, index) => {
            return(
            <tr key={index}>            
              <td>{mem.memSeq}</td>
              <td>{mem.memNick}</td>
              <td>{mem.memEmail}</td>
              <td>{convertDate(mem.memRegdate)}</td>
              <td>{mem.memType}</td>
              <td>{mem.memStatus}</td>
              <td>{mem.socialType}</td>
            </tr>
            )
          })}
        </tbody>
      </table>

      </div>
  )
}
