import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
const useUser = () => {
    const [user] = useAuthState(auth);
    const [dbUser, setUser] =useState([]);

    useEffect(() => {
        const url =`http://localhost:5000/user/${user.email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data))
      
    }, [dbUser])
    

    return [dbUser, setUser];

};

export default useUser;