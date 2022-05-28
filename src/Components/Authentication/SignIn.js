import React from 'react';
import { useForm } from "react-hook-form";
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';


const SignIn = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const { register, getValues, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const onSubmit = async data => {
        signInWithEmailAndPassword(data.email, data.password);

    }

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    )
    const inputEmail = getValues('email')
    if (loading1 || googleLoading || sending) {
        return <Loading></Loading>
    }

    if (error) {
        toast(`${error.message}`)
    }
    if (error1 || googleError) {
        toast(`email and password not matched`)
        // <p>Error: {error1.message || googleError.message}</p>
    }
    if (user1 || googleUser) {
        navigate(from, { replace: true });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card-body card w-full max-w-sm shadow-2xl bg-base-100">
                <p className='font-bold'>Please fill the form to Sign In</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" {...register("email")} className="input input-bordered w-full" />
                    <input type="password" {...register("password")} className="input input-bordered w-full my-3" />
                    <input type="submit" value="Sign In" className=" btn btn-primary input input-bordered w-full" />
                    <p className='mt-3'>forgate password, <button onClick={async () => {
                        await sendPasswordResetEmail(inputEmail );
                        toast(`password reset email hasbeen sent to ${inputEmail}`);
                    }} className='font-bold underline '>Reset Now</button></p>
                </form>
                <div>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline text-center items-center w-full flex justify-between items-center" >
                        <FcGoogle className="text-2xl"></FcGoogle>Sign in with google
                    </button>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline btn-sm text-center items-center w-full">
                        <Link to='/signup'>Sign Up with email</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;