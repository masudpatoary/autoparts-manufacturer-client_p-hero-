import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const RequireAuth = () => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    
    if(error){
        return toast.warning(error)
    }

    if (!user){
        return <Navigate to="/signin" state={{ from: location }} replace />
    }
    return <Outlet />;
};

export default RequireAuth;