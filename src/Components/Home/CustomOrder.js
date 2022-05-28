import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const CustomOrder = () => {
    const styleClass = 'm-1 border py-2 px-4 w-full text-black'
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        console.log(data);

        await fetch('http://localhost:5000/customorder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log('New custom order Successfully Placed database', result);

            })
        toast('New custom order Successfully Placed')
        reset()
    }
    return (

        <div className='w-full max-w-screen-2xl mx-auto'>
            <div class="min-h-screen bg-[url('https://raw.githubusercontent.com/masudpatoary/lucky-1/main-1/assignment-12-manufacturer/custonorder.jpg')]"  >
                <div className='mx-auto w-3/5 py-16'>
                    {/* <div class="hero-overlay bg-opacity-10"></div> */}

                    <div class=" text-center text-neutral-content">
                        <div className="">

                            <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                                <h1 class="mb-5 text-5xl font-bold text-primary">Hello there</h1>
                                <input className={styleClass} {...register("customerName")} placeholder='Your Name' reset required /><br />
                                <input className={styleClass} {...register("customerEmail")} placeholder='Your Email' reset required /><br />
                                <input className={styleClass} type="number" {...register("phoneNumber")} placeholder='Phone Number' required /><br />
                                <textarea className='m-1 border py-2 px-4 w-full h-24 resize-none text-black'  {...register("customerAddress")} placeholder='Your Address' required /><br />
                                <input className={styleClass} type="number" {...register("budget")} placeholder='Your Budget' required /><br />
                                <input className={styleClass} type="number" {...register("quantity")} placeholder='Manufacturing Quantity' required /><br />
                                <textarea className='m-1 border py-2 px-4 w-full h-24 resize-none text-black'  {...register("instructions")} placeholder='Instructions' required /><br />
                                <input type="submit" className='btn btn-sm mt-3 btn-primary' />
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default CustomOrder;