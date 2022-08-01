// import React from 'react'
import React, { useState, useEffect, useContext } from "react";
import { Button, Grid } from '@mui/material'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import axios from 'axios';
import Pagination from "components/review/components/Pagination";
import {GlobalContext} from "components/member/GlobalProvider";
import './ReviewViewForm.css';


export default function ReviewViewForm() {

  const {logined,memNick,memType,globalAxios} = useContext(GlobalContext);
  const Viewer = ({ content }) => (
    <div style={{ width: "640", height: "200" }}
      className="ck-content"
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff1',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



  

  const [reviews, setReview] = useState([]);


  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  
  useEffect(() => {
    globalAxios('/review/reviewList','get', {},response=>{       
      if (response) {
          console.log(response);
          setReview(response);  
        } else {
          alert("failed to ");
        }    
    });
  }, []);


  function convertDate(longValue) {
    return new Date(longValue).toLocaleString();
  }



  const deleteClick = (params, e) => {
    console.log(params);
    globalAxios(`/review/reviewDelete/${params}`,'delete', {}, response=>{       
      if (response) {
        alert("삭제에 성공했습니다.")
        } else {
          alert("failed to ");
        }    
    });



    // axios({
    //   method: "delete",
    //   url: `/review/reviewDelete/${params}`,
    // })
    //   .then((res) => {
    //     alert("삭제에 성공했습니다.")

    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     throw new Error(error);
    //   });
  }


  return (
    <>
      {/* <h1>리뷰</h1>  */}
      {reviews.slice(offset, offset + limit).map(review =>   {
        return (
          
          <Grid key={review.id}
            style={{ maxWidth: 700, minWidth: 500, margin: "0 auto" }}
          >
            <Item>
              <Grid container spacing={2} style={{ height: 70 }} >
                <Grid item xs={4}>
                  {/* 닉네임 */}
                  {review.member === null ? "닉없음" : review.member.memNick}
                </Grid>
                <Grid item xs={4}>
                  {/* 별점 */}
                  {/* <Rating size='large' readOnly precision={0.5} value={((review.reviewService + review.reviewTaste + review.reviewAmount) / 3).toFixed(1)} /> */}
                  <Rating size='large' readOnly precision={0.5} value={((review.reviewService + review.reviewTaste + review.reviewAmount) / 3)} />
                </Grid>
                <Grid item xs={4}>
                  {/* 날짜 */}
                  {convertDate(review.reviewRegdate)}
                </Grid>
              </Grid>                            
                <Grid>
                  <Item style={{ height: 400, margin: "0 auto", overflowY: "auto" }}>
                    <Viewer content={review.reviewContent} />
                  </Item>
                </Grid>              
              <Button onClick={(e) => { deleteClick(review.reviewSeq, e) }}>삭제</Button>
            </Item>
          </Grid>
        );
      })}
      <Pagination total={reviews.length} limit={limit} page={page} setPage={setPage} />
    </>
  )
}
