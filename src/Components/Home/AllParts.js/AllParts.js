import React from 'react';
// import { Link } from 'react-router-dom';
import useParts from './../../../hooks/useParts';
import Parts from './Parts';

const AllParts = () => {
    const [autoparts] = useParts()
    return (
        <div>
            <h1 className='tect-center fw-bold my-2'>Inventories of Rolls Parts</h1>
            <div className='w-100 flex flex-wrap p-md-5 p-sm-2 justify-center '>
                {
                    autoparts.map(parts => <Parts
                        key={parts._id}
                        model={parts.model}
                        img={parts.imgUrl}
                        name={parts.name}
                        details={parts.details}
                        price={parts.price}
                        minOrderQty={parts.minOrderQty}
                        inStockQty={parts.inStockQty}
                    ></Parts>)
                }
            </div>
        </div>
    );
};

export default AllParts;