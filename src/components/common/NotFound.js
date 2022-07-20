import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <ul>
        <li><Link to="/MJH">명준희</Link></li>
        <li><Link to="/JYH">정영훈</Link></li>
        <li><Link to="/LDS">이덕수</Link></li>
        <li><Link to="/LJW">이정우</Link></li>
        <li><Link to="/SWY">서원영</Link></li>
    </ul>
  );
};

export default NotFound;