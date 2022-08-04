import React, { Component } from 'react';
import axios from 'axios'; 
import {Link} from  "react-router-dom";
import Pagination from './Pagination';

class NoticeList extends Component {
    
    
    constructor(props){
        super(props);
        this.state = {noticelist:[]};
    }
    componentDidMount() {
        const res  = axios.get('/noticeboard/Noticelist.go');
        // CORS 문제 발생하여 package.json 에 "proxy": "http://localhost:8080" 추가
        // package.json 수정 후 다시 실행
       res.then(re=>{
        console.log(re.data);
        this.setState({noticelist:re.data});
        });
    } 
     
    // (0)
    render() {
        const imgURL = "/images/red_icon03.png"
        return (
            <div> 
            
                <div>
                <h2 className="text-center">notice List</h2>
                <Link to="/SWY/NoticeBoard/NoticeInsert">
                <button className="insertNotice">글쓰기</button>
                </Link>
                <Link to="/SWY/NoticeBoard/CkNoticeInsert">
                <button className="insertNotice2">CK글쓰기</button>
                </Link>
                <div className ="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목 </th>
                                <th>작성일 </th>
                                <th>조회수 </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.noticelist.map(
                                    list => 
                                    <tr key = {list.noticeBoardSeq}>
                                        <td>{list.noticeBoardSeq}</td>
                                        <td> 
                                        <Link to={`/SWY/NoticeBoard/NoticeDetail/${list.noticeBoardSeq}`}>{list.title} </Link>  
                                        {list.boardTop==1?<img src={imgURL} alt={list.noticeBoardSeq} width="100px" height="100px"/>:<div/>}
                                        </td>
                                       
                                        <td> { new Date(list.regdate).toJSON().split("T")[0]} </td>
                                         <td>{list.hitCount} </td>   
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        );

    }
}
export default NoticeList;
