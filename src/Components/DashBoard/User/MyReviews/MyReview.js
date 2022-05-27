import React from 'react';
import { toast } from 'react-toastify';

const Myreview = (props) => {
    const { name, email, partsName, rating, details } = props
    const cancelOrder = async () => {

        const orderid = props?.id
        console.log(await orderid)
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/order/${orderid}`;
            await fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
            toast(`your order ${props?.partsName} successfully canceled `)
        }
        // navigate('/inventories');
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">
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