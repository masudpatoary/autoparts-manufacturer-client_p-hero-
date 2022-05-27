import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Order = (props) => {
    const {id, model, partsName ,price ,orderqty, shippingStutus,address ,totalprice,phoneNumber, clientEmail, clientName, paymentStutus} = props
    const orderid = props?.id
    const cancelOrder =async () => {
        
        
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
        <div class="card w-96 bg-base-100 m-3 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">
                    {partsName}
                </h2>
                <p>Model: {model}</p>
                <p>Price Per Unit: ${price}</p>
                <p>Avaiable in stock{orderqty}</p>
                <p>Minimum order quantity: {totalprice}</p>
                <p className='font-bold'>Shipping Stutus</p>
                <p>{shippingStutus}</p>
                <p className='font-bold'>Payment Stutus</p>
                <p>{paymentStutus}</p>
                <p className='mt-3 font-bold'>Shipping Address:</p>
                <p>Receipient: {clientName}</p>
                <p>Email: {clientEmail}</p>
                <p>Phone Number: {phoneNumber}</p>
                <p>Receipient Address</p>
                <p>Receipient: {address}</p>
                <button disabled={paymentStutus === "Pre Paid"} className='btn btn-sm w-32'><Link to={`/dashboard/payment/${orderid}`}>Pay Now</Link></button>
                <button onClick={()=>cancelOrder()} disabled={paymentStutus === 'Pre Payment'} className='btn btn-sm w-32'>Cancel order</button>
            </div>
        </div>
    );
};

export default Order;