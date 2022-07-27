import React, { Component } from 'react';
import axios from 'axios'; 
 
class EmpDetailComponent extends Component {

    constructor(props){
        super(props);
        this.state = {emp:[]};
    }
    componentDidMount() {
        // (1)
        const res  = axios.get('/emp/empdetail.do/103');
        // CORS 문제 발생하여 package.json 에 "proxy": "http://localhost:8080" 추가
        // package.json 수정 후 다시 실행
       res.then(re=>{
        console.log(re.data);
        this.setState({emp:re.data});
        });
    }
     
    // (0)
    render() {
        return (
            <div>
                               <h2 className="text-center">emp Detail</h2>
                            {
                                 <ul>
                                    <li>{this.state.emp.first_name}</li>
                               </ul> 
                            }
                       
           
            </div>
        );
    }
}

export default EmpDetailComponent;