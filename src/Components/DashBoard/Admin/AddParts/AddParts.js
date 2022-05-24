import React from 'react';
import { useForm } from "react-hook-form";

const AddParts = () => {
    const styleClass ='m-1 border py-2 px-4 w-full'
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset()
    }
    return (
        <div>
            <input type="checkbox" id="add-parts-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h1>Fill the form and <span className='font-bold'>"SUBMIT"</span> < br/>to add a new <span className='font-bold'>Parts</span> in stock</h1>
                <label for="add-parts-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                        <input className ={styleClass} {...register("name")} placeholder='Parts Name' reset required /><br />
                        <input className ={styleClass} {...register("model")} placeholder='Parts Model' reset required /><br />
                        <input className ={styleClass} type="number" {...register("price")} placeholder='Price' required /><br />
                        <input className ={styleClass} type="number" {...register("inStockQty")} placeholder='Stock in Quantity' required /><br />
                        <input className ={styleClass} {...register("imgUrl")} placeholder='Give Image Url' required /><br />
                        <input className ={styleClass} type="number" {...register("minOrderQty")} placeholder='Minimum Order in Quantity' required /><br />
                        <textarea className ='m-1 border py-2 px-4 w-full h-24 resize-none'  {...register("details")} placeholder='Description' required /><br />
                        <input  type="submit"  className='btn btn-sm mt-3'/>
                    </form>
                    
                </div>
            </div>
        </div >
    );
};

export default AddParts;