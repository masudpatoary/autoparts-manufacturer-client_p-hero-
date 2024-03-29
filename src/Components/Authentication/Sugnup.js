import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const [user, loading] = useAuthState(auth);
    const [
        updateProfile,
        updating1, 
        error1] = useUpdateProfile(auth);

    const [
        createUserWithEmailAndPassword,
        user2,
        loading2,
        error2] = useCreateUserWithEmailAndPassword(auth);
    const [
        sendEmailVerification,
        sending3,
        error3] = useSendEmailVerification(auth);



        const onSubmit = async data => {
            // console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        await sendEmailVerification();
        toast('Acount created successfully')

        console.log(data);
        await fetch('https://auto-server-o5cy.onrender.com/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log('New user added to database', result);

            })
       
    }

    if (error1 || error2 || error3) {
        return (
            <div>
                <p>Error: {error1.message || error2.message || error3.message}</p>
            </div>
        );
    }
    if (loading || loading2 || updating1 || sending3) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }
    
    return (
        <div  className="hero min-h-screen bg-base-200">
            <div  className="card-body card w-full max-w-sm shadow-2xl bg-base-100">
                <p className='font-bold'>Please fill the form to Sign Up</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="name" {...register("name")}  className="input input-bordered w-full mb-3" placeholder='Your Name'/>
                    <input type="email" {...register("email")}  className="input input-bordered w-full" />
                    <input type="password" {...register("password")}  className="input input-bordered w-full my-3" />
                    <input type="submit" value="Sign Up"  className=" btn btn-primary input input-bordered w-full" />
                </form>
                <div  className="divider">OR</div>
                <button  className="btn btn-outline text-center items-center  btn-sm">
                <Link to='/signin'>Sign In</Link>
                </button>
            </div>
        </div>
    );
};

export default SignUp;