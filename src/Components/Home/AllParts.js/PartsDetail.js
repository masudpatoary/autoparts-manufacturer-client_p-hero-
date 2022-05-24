import React from 'react';
import { useParams } from 'react-router-dom';
import usePartsDetail from '../../../hooks/usePartsDetail';
import { useForm } from "react-hook-form";

const PartsDetail = () => {
    const { id } = useParams()
    const [detail] = usePartsDetail(id)
    const { model, imgUrl, name, details, price, minOrderQty, inStockQty } = detail
    const styleClass = 'm-1 px-3 border py-2 px-4 w-full'
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset()
    }

    return (
        <div className='md:w-4/5 mx-auto'>
            <h1 className="text-2xl font-bold my-2">{name}</h1>
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
                        <div className="card-body">

                            <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                                <input className={styleClass} {...register("clientName")} placeholder='Your Name' reset required /><br />
                                <input className={styleClass} {...register("clientEmail")} placeholder='Your Email 'reset required /><br />
                                <input className={styleClass} type="number" {...register("phoneNumber")} placeholder='Phone Number' required /><br />
                                <input className={styleClass} type="number" {...register("orderqty")} placeholder='Stock in Quantity' required /><br />
                                <textarea className='m-1 border py-2 px-4 w-full h-24 resize-none'  {...register("address")} placeholder='Give Your Address' required /><br />
                                <input type="submit" for="payment-modal" className='btn btn-sm mt-3' value='Pay Now' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartsDetail;