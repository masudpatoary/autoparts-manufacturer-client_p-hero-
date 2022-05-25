import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import usePartsDetail from '../../../hooks/usePartsDetail';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';



const PartsDetail = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams()
    const [detail] = usePartsDetail(id)
    const { model, imgUrl, name, details, price, minOrderQty, inStockQty } = detail
    const styleClass = 'm-1 border py-2 px-4 w-full'
    const { register, handleSubmit, getValues, setValue, reset } = useForm();

    //    const orderQtyValue = minOrderQty <= getValues('orderqty') && inStockQty>=getValues('orderqty')

    const onSubmit = async data => {
        const partsName = name
        const formData = { ...data, price, partsName }
        console.log(await formData);
        await fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(result => {
                console.log('New order received', result);

            })
        toast('New order Successfully POlaced')
        reset()
    }
    const orderQty = getValues('orderqty')
    const totalOrderedItemPrice = (orderQty * detail?.price)


    return (
        <div className='md:w-4/5 mx-auto mb-5'>
            <h1 className="text-2xl font-bold my-2 text-center">{name}</h1>
            <div className="  bg-base-200">

                <div className="hero-content  flex-col lg:flex-row-reverse">

                    <div className=" text-left md: px-4">
                        <div>
                            <div>
                                <img src={imgUrl} alt="Movie" className='w-64	' />
                            </div>
                        </div>

                        <div>
                            <p className="py-2">Model: {model}</p>
                            <p className="">Price: ${price}</p>
                            <p className="py-2">Minimum order quantity{minOrderQty}</p>
                            <p className="font-bold">Description</p>
                            <p className="">{details}</p>
                        </div>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body ">
                            <p className='text-center'>Fill the form and Order now</p>
                            <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                                <input className={styleClass} {...register("clientName")} placeholder='Your Name' reset required value={user?.displayName || ''} /><br />
                                <input className={styleClass} {...register("clientEmail")} placeholder='Your Email ' reset required value={user?.email || ''} /><br />
                                <input className={styleClass} type="number" {...register("phoneNumber")} placeholder='Phone Number' required /><br />
                                <input className={styleClass} type="number" {...register("orderqty", { max: detail?.inStockQty }, { min: detail?.minOrderQty })} onBlur={() => setValue("totalprice", totalOrderedItemPrice)} placeholder='Order Quantity' required /><br />
                                <textarea className='m-1 border py-2 px-4 w-full h-24 resize-none'  {...register("address")} placeholder='Give Your Address' required /><br />
                                <label>Total Cost: $</label><input {...register("totalprice")} className='m-1 border py-2 px-4' type="number" /><br />
                                <label>Payment Stutus: </label>
                                <select className="select select-bordered select-sm w-48 m-2 max-w-xs" {...register("paymentStutus")}>
                                    <option >Due</option>
                                    <option >Pre Payment</option>
                                </select><br />
                                <input type="submit" className='btn btn-sm' value='Order Now' />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartsDetail;