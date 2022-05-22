import React from 'react';

const Review = ({ name, partsname, imgUrl, review, rating }) => {
    return (
        <div className='w-72 my-5 border m-2 p-5'>
            <div className='flex justify-center'>
                <img src={imgUrl} alt="" className='w-16' />
            </div>
            <div className='text-center'>
                <p className='font-bold text-lg  '>Client Name: {name}</p>
                <p className='font-semibold text-md '>Parts Name: {partsname}</p>
                <p className='font-semibold text-md '>Rating: {rating} &#40;out of 5&#41;</p>
                <p className='font-semibold text-xl'><q>{review}</q></p>
            </div>

        </div>
    );
};

export default Review;