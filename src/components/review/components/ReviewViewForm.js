// import React from 'react'
import React, { useState, useEffect } from "react";
import { Button, Grid, Grow } from '@mui/material'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import axios from 'axios';

import Rating from '@mui/material/Rating';

import 'components/review/components/ReviewViewForm.css';
import Pagination from "components/review/components/Pagination";
// import './Products.css';






export default function ReviewViewForm() {

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
    axios.get("/review/reviewList").then((response) => {
      if (response.data) {
        console.log(response.data);
        setReview(response.data);

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
    axios({
      method: "delete",
      url: `/review/reviewDelete/${params}`,
    })
      .then((res) => {
        //console.log(res);
        //console.log(reviewInsert);
        alert("삭제에 성공했습니다.")

      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  }


  return (
    <>
      {/* <h1>리뷰</h1>  */}
      {reviews.slice(offset, offset + limit).map(review => {
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
                  <Rating size='large' readOnly precision={0.5} value={((review.reviewService + review.reviewTaste + review.reviewAmount) / 3).toFixed(1)} />
                </Grid>
                <Grid item xs={4}>
                  {/* 날짜 */}
                  {convertDate(review.reviewRegdate)}
                </Grid>
              </Grid>
              <Grid>
                {/* <Grid >
                <Item style={{ height: 200, margin: "0 auto" }}>사진영역</Item>
              </Grid> */}
                <Grid>
                  <Item style={{ height: 400, margin: "0 auto", overflowY: "auto" }}>
                    <Viewer content={review.reviewContent} />
                  </Item>
                </Grid>
              </Grid>
              <Button onClick={(e) => { deleteClick(review.reviewSeq, e) }}>삭제</Button>
            </Item>
          </Grid>
        )
      })}
      <Pagination total={reviews.length} limit={limit} page={page} setPage={setPage} />
    </>
  )
}
