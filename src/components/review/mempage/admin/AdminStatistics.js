import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "components/common/GlobalProvider";


export default function AdminStatistics() {
  const { globalAxios } = useContext(GlobalContext);
  
  const [review, setReview] = useState([]);
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

  const 사업자회원 = members.filter(item=>item.memType==='사업자회원');
  const 일반회원 = members.filter(item=>item.memType==='일반회원');
  const 전체회원 = members.filter(item=>item.memType!='관리자');

  const 영업 = shops.filter(item =>item.shopStatus==='활성');
  const 폐업 = shops.filter(item =>item.shopStatus==='비활성');





  useEffect(memList, []);
  useEffect(shopList, []);
  useEffect(reviewList, []);

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

    </div>
  )
}
