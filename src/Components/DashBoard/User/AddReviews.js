import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useSingleAdmin from '../../../hooks/useUser';
import { toast } from 'react-toastify';


const AddReviews = () => {
    const [user] = useAuthState(auth);
    const [dbUser] = useSingleAdmin()
    const styleClass ='m-1 border py-2 px-4 w-full'
    const { register, handleSubmit, reset } = useForm();

    const id = dbUser?._id
    const onSubmit = async data => {
        console.log(data);
        await fetch(`http://localhost:5000/review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log('Review Successfully Provided', result);

            })
        toast('You successfully reviewed')
        reset()
    }
    return (
        <div>
            <input type="checkbox" id="add-review-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h1 className='text-center font-bold'>Send Us your feedback</h1>
                <label for="add-review-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                        <input className ={styleClass} {...register("name")}
                        value={user.displayName} 
                        
                        reset required /><br />
                        <input className ={styleClass} type='email' {...register("email")}
                        value={user.email} 
                        reset required /><br />
                        <input className ={styleClass} type="text" {...register("partsname")}
                        
                        placeholder='Product Name' required /><br />
                        <label className='mx-2' >Give Your Rating: </label>
                                <select className="select select-bordered select-sm w-48 m-2 max-w-xs" {...register("rating")} required>
                                    <option >1</option>
                                    <option >2</option>
                                    <option >3</option>
                                    <option >4</option>
                                    <option >5</option>
                                </select><br />
                        
                        <textarea className ='m-1 border py-2 px-4 w-full h-24 resize-none'  {...register("details")} placeholder='Description' required /><br />
                        <input  type="submit"  className='btn btn-sm mt-3'/>
                    </form>
                    
                </div>
            </div>
        </div >
    );
};

export default AddReviews;