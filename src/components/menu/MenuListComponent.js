import React, { Component } from 'react';
import axios from 'axios'; 
import {Link} from  "react-router-dom"

class MenuListComponent extends Component {

     

    constructor(props){
        super(props);
        this.state = {menulist:[]};
    }
    componentDidMount() {
        
        const res  = axios.get('/*/menuList');
        
        res.then(re=>{
        console.log(re.data);
        this.setState({menulist:re.data});
        });
    }
    
    render() {
        return (
            <div>
                <div>
                <h2 className="text-center">메뉴목록</h2>
                <div className ="row">
                    <table id="menutable">
                    <thead>
                        <tr>
                            <td>순서</td>
                            <td>이미지</td>
                            <td>메뉴ID</td>
                            <td>메뉴이름</td>
                            <td>카테고리</td>
                            <td>가격</td>
                            <td>메뉴소개</td>
                            <td>상세소개</td>
                            <td>상단표시여부</td>
                            <td>비고</td>
                        </tr>
                    </thead>
                        <tbody>
                            {
                                this.state.menulist.map(
                                    menu => 
                                    <tr key = {menu.menuSeq}>
                                        <td></td>
                                        <td> {menu.menuImage} </td>
                                        <td>{menu.menuSeq}                 
                                            <Link to={`/menu/menuDetail/${menu.menuSeq}`}> {menu.menuSeq} </Link> 
                                        </td>
                                        <td> {menu.menuName} </td>
                                        <td> {menu.menuCategory.menuCategorySeq} </td>
                                        <td> {menu.menuPrice} </td>
                                        <td> {menu.menuSimpleInfo} </td>
                                        <td> {menu.menuDetailInfo} </td>
                                        <td> {menu.menuTop} </td>
                                        <td></td>
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

export default MenuListComponent;
