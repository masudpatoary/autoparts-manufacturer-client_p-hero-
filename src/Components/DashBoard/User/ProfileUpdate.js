import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';

const ProfileUpdate = () => {
    const [user] = useAuthState(auth);
    const styleClass = 'm-1 border py-2 px-4 w-full'
    const { register, handleSubmit, getValues, reset } = useForm();
    const email = user?.email
    const aa = () => {
        console.log(email);
        console.log(email);

    }
    const onSubmit = async data => {


        await fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log('user updated', user?.email, result);

            })
        // toast('New order Successfully POlaced')
        // reset()
    }
    return (
        <div>
            <input type="checkbox" id="profileupdate" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h1>Fill the form and <span className='font-bold'>"SUBMIT"</span> < br />to Update your Profile</h1>
                    <label for="profileupdate" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                    <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                        <input className={styleClass}

                            {...register("name")} placeholder='Your Updated Name' reset required /><br />

                        <input className={styleClass}
                            {...register("seconderyEmail")} placeholder='Your New Email' reset required /><br />

                        <input type="submit" className='btn btn-sm mt-3' />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default ProfileUpdate;