import React from 'react';
import { ToastContainer } from 'react-toastify';
// import { Link } from 'react-router-dom';
import useParts from './../../../hooks/useParts';
import Parts from './Parts';

const AllParts = () => {
    const [autoparts] = useParts()
    return (
        <div className='mt-10'>
            <h1 className='text-center text-xl font-bold my-2'>Currently Available Parts</h1>
            <div className='w-100 flex flex-wrap p-md-5 p-sm-2 justify-center '>
                {
                    autoparts.map(parts => <Parts
                        key={parts._id}
                        id={parts._id}
                        model={parts.model}
                        img={parts.imgUrl}
                        name={parts.name}
                        price={parts.price}
                        details={parts.details}
                        minOrderQty={parts.minOrderQty}
                        inStockQty={parts.inStockQty}
                    ></Parts>)
                }
            </div>
        </div>
    );
};

export default AllParts;