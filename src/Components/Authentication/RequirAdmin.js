import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';


const RequirAdmin = async ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [adminexist] = useAdmin(auth);
    
    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        return toast.warning(error)
    }
    if (await !adminexist && !user) {
        console.log(adminexist)
        signOut()
        return <Navigate to="/" />
    }
    return children;
};

export default RequirAdmin;