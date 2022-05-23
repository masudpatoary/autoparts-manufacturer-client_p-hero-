import React from 'react';
import { useForm } from "react-hook-form";
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const SignIn = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const { register, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    if (loading1 || googleLoading) {
        return <Loading></Loading>
    }

    if (error1 || googleError) {
        return (
            <div>
                <p>Error: {error1.message ||googleError.message}</p>
            </div>
        );
    }
    if (user1 || googleUser) {
        navigate(from, { replace: true });
    }
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="card-body card w-full max-w-sm shadow-2xl bg-base-100">
                <p className='font-bold'>Please fill the form to Sign In</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" {...register("email")} class="input input-bordered w-full" />
                    <input type="password" {...register("password")} class="input input-bordered w-full my-3" />
                    <input type="submit" value="Sign In" class=" btn btn-primary input input-bordered w-full" />
                </form>
                <div>
                    <div class="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-outline text-center items-center w-full flex justify-between items-center" >
                        <FcGoogle className="text-2xl"></FcGoogle>Sign in with google
                    </button>
                    <div class="divider">OR</div>
                    <button class="btn btn-outline btn-sm text-center items-center w-full">
                        <Link to='/signup'>Sign Up with email</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;