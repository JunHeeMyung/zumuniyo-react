import * as React from 'react';
import AdminFloatingAction from "components/review/components/AdminFloatingAction";

// import React, { useState, useEffect, useContext } from "react";
// import { GlobalContext } from "components/common/GlobalProvider";
// import Chartsss from "components/review/components/Chartsss";
// import { PieChart, Pie, Cell } from "recharts";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
// import { Box, Container, Grid } from '@mui/material';

export default function AdminStatistics() {

  // const { globalAxios } = useContext(GlobalContext);

  // const [review, setReview] = useState([]);
  // const [reviewc, setReviewc] = useState([]);

  // const [members, setMembers] = useState([]);
  // const [shops, setShops] = useState([]);





  // const reviewList = () => {
  //   globalAxios('/review/reviewList', 'get', {}, response => {
  //     if (response) {
  //       setReview(response);
  //     } else {
  //       alert("failed to ");
  //     }
  //   });
  // }

  // const reviewCList = () => {
  //   globalAxios('/review/reviewDayCount', 'get', {}, response => {
  //     if (response) {
  //       setReviewc(response);
  //     } else {
  //       alert("failed to ");
  //     }
  //   });
  // }
  // const memList = () => {
  //   globalAxios('/review/memList', 'post', {}, res => {
  //     if (res) {
  //       console.log(res);
  //       setMembers(res);
  //     } else {
  //       alert("failed to ");
  //     }
  //   });
  // }


  // const shopList = () => {
  //   globalAxios('/review/shopList', 'post', {}, res => {
  //     if (res) {
  //       console.log(res);
  //       setShops(res);
  //     } else {
  //       alert("failed to ");
  //     }
  //   });
  // }

  // const 사업자회원 = members.filter(item => item.memType === '사업자회원');
  // const 일반회원 = members.filter(item => item.memType === '일반회원');
  // const 전체회원 = members.filter(item => item.memType != '관리자');

  // const 영업 = shops.filter(item => item.shopStatus === '활성');
  // const 폐업 = shops.filter(item => item.shopStatus === '비활성');
  
  // const dataMember = [{ name: '전체회원', uv: 전체회원.length }, { name: '사업자회원', uv: 사업자회원.length }, { name: '일반회원', uv: 일반회원.length}];
  // const dataShop = [{ name: '전체매장', uv: shops.length }, { name: '영업중', uv: 영업.length }, { name: '폐업', uv: 폐업.length}];
  // const [dataReview, setDataReview ] =  useState([]);
  
  
  // useEffect(memList, []);
  // useEffect(shopList, []);
  // useEffect(reviewList, []);
  // useEffect(reviewCList, []);
  


  return (
    <>
      {/* <h1>통계</h1> */}
      <AdminFloatingAction/>


      {/* 
      <h2>회원</h2>
      <p>전체회원{전체회원.length}</p>
      <p>사업자회원{사업자회원.length}</p>
      <p>일반회원{일반회원.length}</p>
      <br />
      <br />
      <h2>매장</h2>
      <p>매장 {shops.length}</p>
      <p>영업중 {영업.length}</p>
      <p>폐업 {폐업.length}</p>


      <h2>리뷰</h2>
      <p>리뷰 {review.length}</p>
  <div>
        <h1>리뷰 날짜, 등록건수</h1>

        <table>
          <thead>
            <tr>
              <th >날짜</th>
              <th></th>
              <th></th>
              <th >등록건수</th>
            </tr>
          </thead>
          <tbody>
            {reviewc.map((rc, index) => {
              return (
                <tr key={index}>
                  <td>{rc.REVIEW_REGDATE}</td>
                  <td></td>
                  <td></td>
                  <td>{rc.CNT}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

      </div> */}      
      
            





      {/* <Grid>        
        <BarChart width={600} height={300} data={dataMember}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="uv" fill="#8884d8" barSize={30} />
        </BarChart>
      </Grid>
      <Grid>        
        <BarChart width={600} height={300} data={dataShop}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="uv" fill="#8884d8" barSize={30} />
        </BarChart>
      </Grid>
      <Grid>       
        <BarChart width={600} height={300} data={reviewc}>
          <XAxis dataKey="REVIEW_REGDATE" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="CNT" fill="#8884d8" barSize={30} />
        </BarChart>
      </Grid> */}


    
    </>
  )
}
