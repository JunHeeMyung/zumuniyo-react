import NotFound from "components/common/NotFound";
import React,{  useState,useEffect } from "react";
import { Route, Routes ,useNavigate} from "react-router-dom";
import ZumuniyoAxios from 'components/common/ZumuniyoAxios';

const Register = (props)=> {

return (
    <>
    네이버 소셜가입

    <br/>
    가입폼
    <br/>
    {props.memEmail}
    <br/>
    {props.socialType}

    </>
);
}
export default Register;