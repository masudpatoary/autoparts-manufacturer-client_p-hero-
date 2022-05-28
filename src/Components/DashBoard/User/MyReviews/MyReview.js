import React from 'react';

const Myreview = (props) => {
    const { name, email, partsName, rating, details } = props

    return (
        <div className="card md:w-96 sm:w-full bg-base-100 shadow-xl m-5">
            <div className="card-body">
                <h2 className="card-title">
                    {partsName}
                </h2>
                <p className='font-bold'>Name: {name}</p>
                <p className='font-bold'>Rating: {rating}</p>
                <p className='px-0 flex'>{details}</p>
            </div>
        </div>


    );
};

export default Myreview;