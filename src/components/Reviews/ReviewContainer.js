import React from "react";
import {useState, useEffect} from "react";
import ReviewCard from "./ReviewCard";
import "./Review.css";

function ReviewContainer() {

  const [reviews, setReviews] = useState([]);
 useEffect(()=>{
  fetch("http://127.0.0.1:3000/reviews")
  .then((response)=>response.json())
  .then((reviews)=>{setReviews(reviews)})
 },[])

  const reviewList = reviews.map((review) => (
    <ReviewCard
      key={review.id}
      reviewId={review.id}
      reviewTitle={review.title}
      reviewComment={review.comment}
      reviewUser={review.user}
    />
  ));
  // return (
  //   <div className="review-container">
  //     <h3>Reviews</h3>
  //     <button className="review-btn" onClick={handleAddReview}>
  //       Add Review
  //     </button>
  //     {reviewList}
  //   </div>
  
}

export default ReviewContainer;