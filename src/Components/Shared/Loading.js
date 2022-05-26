import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className=' flex justify-center w-full my-10'>
            <div>
                <p className='mb-3 '>Loading ...</p>

                <div className="lds-spinner">
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
        </div>
    );
};

export default Loading;