import React from 'react';
import { useNavigate } from 'react-router-dom';

const Parts = (props) => {
    const navigate = useNavigate()
    const { model, img, name, details, price, minOrderQty, inStockQty } = props


    const showInventoryDetail = (id) => {
        navigate(`/inventory/${props.id}`)
    }
    return (
        <div class="md:flex justify-between items-center sm:w-full md:w-2/5 bg-base-100 border m-2 px-5">
            <div className='md:w-1/3  sm:w-1/2 sm:flex sm:justify-center'>
                <img src={img} alt="Movie" />
            </div>

            <div class=" my-2 h-full flex flex-wrap items-baseline  text-left w-2/3 text-base">
                <div className='w-full'>
                    <h2 class="card-title">{name}</h2>
                    <p>Price Per Unit: ${price}</p>
                    <p>Avaiable in stock{inStockQty}</p>
                    <p>Minimum order quantity: {minOrderQty}</p>
                    <p className='font-bold'>Description</p>
                    <p>{details}</p>
                </div>
                <div className='w-full'>
                    <button class="btn btn-primary w-full">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default Parts;