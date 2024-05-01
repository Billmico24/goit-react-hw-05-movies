import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchReviews } from '../../services/fetch';
import { nanoid } from 'nanoid';
import { ReviewList, ReviewItem, ReviewAuthor, ReviewText, Error } from './Review.styled';

const Review = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function addReviews() {
      if (movieId) {
        try {
          const data = await fetchReviews(movieId);
          setReview(data.results);
          return data.results;
        } catch (error) {
          console.log(error.response.data)
        }
      }
    }
    addReviews(movieId);
  }, [movieId]);

  return (
    <>
        {review.length !== 0
        ? (<ReviewList> 
            {review.map(review => {
                return (
                    <ReviewItem key={nanoid(3)}>
                        <ReviewAuthor>{review.author}</ReviewAuthor>
                        <ReviewText>{review.content}</ReviewText>
                    </ReviewItem>
                );
            })}
          </ReviewList>)
        : (<Error>
            No reviews information.
          </Error>)}
    </>
  );
};
export default Review;