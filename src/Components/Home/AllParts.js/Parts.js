import React from 'react';
import { useNavigate } from 'react-router-dom';

const Parts = (props) => {
    const navigate = useNavigate()
    const { id, model, img, name, details, price, minOrderQty, inStockQty } = props


    const PartsDetail = () => {
        navigate(`/autoparts/${id}`)
    }
    return (
        <div  className="justify-between items-end sm:w-full md:w-2/5  border m-2 p-5">
            <div className='flex justify-center'>
                <div>
                    <img src={img} alt="Movie" className='w-96	' />
                </div>
            </div>

            <div  className=" my-3   text-left text-base">
                <h2  className="card-title">{name}</h2>
                <p>Model: {model}</p>
                <p>Price Per Unit: ${price}</p>
                <p>Avaiable in stock{inStockQty}</p>
                <p>Minimum order quantity: {minOrderQty}</p>
                <p className='font-bold mt-2'>Description</p>
                <p>{details}</p>
            </div>
            <div className='w-full mb-0 flex justify-center items-end'>
                <button onClick={PartsDetail}  className="btn btn-primary w-40">Buy Now</button>
            </div>
        </div>
    );
};

export default Parts;