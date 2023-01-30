import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Order = ({ order, index }) => {
    const { clientName, clientEmail, partsName, model, imgUrl, price, orderqty, paymentStutus, shippingStutus, _id } = order



    const { register, getValues, handleSubmit } = useForm();
    const onSubmit = async data => {
        await fetch(`https://auto-server-o5cy.onrender.com/order/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log('New parts added to database', result);

            })

    };
    return (
        <tr className=' text-center '>
            <th>{index + 1}</th>
            <td className='md:hidden'>
                <div className="w-16">
                    <img src={imgUrl} alt={partsName} />
                </div>
            </td>
            <td>{partsName}</td>
            <td className='md:hidden'>{model}</td>
            <td>{orderqty}</td>
            <td>{clientName}</td>
            <td>{clientEmail}</td>
            <td>{price}</td>
            <td>{paymentStutus}</td>
            <td>{shippingStutus}</td>
            <td>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <select {...register("shippingStatus")} className="select select-bordered select-sm  max-w-xs">
                        <option ></option>
                        <option >Confirmed</option>
                        <option >Shipped</option>
                        <option >Delivered</option>
                    </select><br />
                    <input type="submit" value='Confirm' disabled={shippingStutus === 'Delivered'} className='btn btn-xs btn-warning mt-2' />
                </form>
            </td>
        </tr>
    );
};

export default Order;