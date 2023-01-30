import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import OrderCancelModal from './OrderCancelModal';

const Order = (props) => {
    const { id, model, partsName, price, orderqty, shippingStutus, address, totalprice, phoneNumber, clientEmail, clientName, paymentStutus } = props
    const orderid = props?.id
    // const cancelOrder = async () => {


    //     console.log(await orderid)
    //     const proceed = window.confirm('Are you sure?');
    //     if (proceed) {
    //         const url = `https://auto-server-o5cy.onrender.com/order/${orderid}`;
    //         await fetch(url, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //             })
    //         toast(`your order ${props?.partsName} successfully canceled `)
    //     }
    //     // navigate('/inventories');
    // }




    return (
        <div  className="card w-96 bg-base-100 m-3 shadow-xl">
            <div  className="card-body">
                <h2  className="card-title">
                    {partsName}
                </h2>
                <p>Model: {model}</p>
                <p>Price Per Unit: ${price}</p>
                <p>Order Quantity: {orderqty}</p>
                <p>Totac Cost: {totalprice}</p>
                <p className='font-bold'>Shipping Stutus</p>
                <p>{shippingStutus}</p>
                <p className='font-bold'>Payment Stutus</p>
                <p>{paymentStutus}</p>
                <p className='mt-3 font-bold'>Shipping To:</p>
                <p>Receipient: {clientName}</p>
                <p>Email: {clientEmail}</p>
                <p>Phone Number: {phoneNumber}</p>
                <p className='font-bold'>Address</p>
                <p>Receipient: {address}</p>
                <button disabled={paymentStutus === "Paid"} className='btn btn-sm w-32'><Link to={`/dashboard/payment/${orderid}`}>Pay Now</Link></button>
                <button disabled={(paymentStutus === 'Pre Paid') ||(shippingStutus === 'Confirmed')||(shippingStutus === 'Shipped')||(shippingStutus === 'Delivered') } className='btn btn-sm w-32'><label for="my-modal-6"  className="btn modal-button">Cancel order</label></button>
            </div>
            <OrderCancelModal props= {props}></OrderCancelModal>
        </div>
    );
};

export default Order;