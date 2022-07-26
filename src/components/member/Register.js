import React,{  useState,useEffect } from "react";
import {useNavigate} from "react-router-dom";
import ZumuniyoAxios from 'components/common/ZumuniyoAxios';

const Register = (props)=> {

    const navigate = useNavigate();

    const [member,setMember] = useState({
        memNick : '',
        memEmail : props.memEmail,
        memType : '일반회원',
        socialType : props.socialType
    });

    const onChange = e => {
        const { name , value } = e.target;
        setMember({...member, [name] : value });
    }

    const emailCheck = () => {
        if(props.memEmail ==='') navigate(-3,{replace:true});
    }

    const registerResult = result => {
        alert(result);
        if(result==='가입성공') navigate(-3,{replace:true});
    }

    const onSubmit = e => {
        e.preventDefault();

        const params = new URLSearchParams();
        params.append('memNick',member.memNick);
        params.append('memEmail',member.memEmail);
        params.append('memType',member.memType);
        params.append('socialType',member.socialType);
        
        ZumuniyoAxios('/member/naver/','post',params,result=>{registerResult(result)});

    }

    useEffect(
        () => {
            emailCheck();
        }, []
      );

return (
    <>

    저장값 : {JSON.stringify(member)}

    <h1>네이버 계정으로 회원가입</h1>

    <form className="" onSubmit={onSubmit}>
        <div className="memNickBox">
            <h4>닉네임</h4>
            <input name="memNick" onChange={onChange}/>
        </div>
        <div className="memTypeBox">
            <h4>타입</h4>
            <input type="radio" id="memType1" name="memType" value="일반회원" onChange={onChange} defaultChecked/>
            <label htmlFor="memType1">일반회원</label>
            <input type="radio" id="memType2" name="memType" value="사업자회원" onChange={onChange}/>
            <label htmlFor="memType2">사업자회원</label>
        </div>
        <div>
            <input type="submit" value="가입하기"/>
        </div>
    </form>

    </>
);
}
export default Register;