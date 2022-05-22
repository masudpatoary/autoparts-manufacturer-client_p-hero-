import React from 'react';

const Summary = ({img, number, quote}) => {
    return (
        <div className='w-72 my-5'>
            <div className='flex justify-center'>
                <img src={img} alt="" className='w-16'/>
            </div>
            <p className='font-bold text-2xl text-center mt-8 mb-3'>{number}+</p>
            <p className='font-semibold text-xl text-center'>{quote}</p>
        </div>
    );
};

export default Summary;