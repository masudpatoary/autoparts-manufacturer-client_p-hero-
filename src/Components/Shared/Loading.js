import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className=' mx-auto w-full my-10'>
            <p className='mb-3 '>Loading ...</p>

            <div  className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loading;