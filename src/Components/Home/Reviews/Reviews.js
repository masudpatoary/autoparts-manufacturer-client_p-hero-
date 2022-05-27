import React from 'react';
import useReviews from './../../../hooks/useReviews';
import Review from './Review';

const Reviews = () => {
    const [reviews]= useReviews()
    const result = reviews.slice(-4)
    return (
        <div className='my-10'>
            <p className='font-bold text-2xl text-center mb-4'>Millions Business Trusts Us</p>
            <div className='flex flex-wrap justify-center items-center'>
                {
                    result.map(review=>(<Review
                    key={review._id}
                    name={review.name}
                    partsname={review.partsname}
                    review={review.review}
                    rating={review.rating}
                    ></Review>))
                }
            </div>
        </div>
    );
};

export default Reviews;