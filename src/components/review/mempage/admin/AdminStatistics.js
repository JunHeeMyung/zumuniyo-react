import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "components/common/GlobalProvider";
import Chartsss from "components/review/components/Chartsss";
import { Box, Container, Grid } from '@mui/material';
// import { PieChart, Pie, Cell } from "recharts";










export default function AdminStatistics() {
  const { globalAxios } = useContext(GlobalContext);
  
  const [review, setReview] = useState([]);
  const [reviewc, setReviewc] = useState([]);

  const [members, setMembers] = useState([]);
  const [shops, setShops] = useState([]);
  

  const reviewList = () => {     
    globalAxios('/review/reviewList', 'get', {}, response => {
      if (response) {
        setReview(response);
      } else {
        alert("failed to ");
      }
    });
  }
  
  const reviewCList = () => {     
    globalAxios('/review/reviewDayCount', 'get', {}, response => {
      if (response) {
        setReviewc(response);        
      } else {
        alert("failed to ");
      }
    });
  }
  const memList = () => {
    globalAxios('/review/memList', 'post', {}, res => {      
      if (res) {
        console.log(res);        
        setMembers(res);        
      } else {
        alert("failed to ");
      }
    });
  }


  const shopList = () => {
    globalAxios('/review/shopList', 'post', {}, res => {      
      if (res) {
        console.log(res);        
        setShops(res);
      } else {
        alert("failed to ");
      }
    });
  }




  // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  // const RADIAN = Math.PI / 180;
  // const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  //   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  //   const x = cx + radius * Math.cos(-midAngle * RADIAN);
  //   const y = cy + radius * Math.sin(-midAngle * RADIAN);
  //   return (
  //     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
  //       {`${(percent * 100).toFixed(0)}%`}
  //     </text>
  //   );
  // };
  




  const 사업자회원 = members.filter(item=>item.memType==='사업자회원');
  const 일반회원 = members.filter(item=>item.memType==='일반회원');
  const 전체회원 = members.filter(item=>item.memType!='관리자');

  const 영업 = shops.filter(item =>item.shopStatus==='활성');
  const 폐업 = shops.filter(item =>item.shopStatus==='비활성');



  // const data = [
  //   { name: '전체회원', value: 전체회원 },
  //   { name: '사업자회원', value: 사업자회원 },
  //   { name: '일반회원', value: 일반회원 }
  // ];


  useEffect(memList, []);
  useEffect(shopList, []);
  useEffect(reviewList, []);
  useEffect(reviewCList, []);


  return (
    <div>
      <h1>통계</h1>

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
      {reviewc.map((rc, index)=>{
        return(
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

      </div>


      
      {/* <PieChart width={500} height={500} style={{margin:"0 auto"}}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={200}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart> */}
       <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          <Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      ></Grid>
    <Chartsss/>
    </Box>
    </div>
  )
}
