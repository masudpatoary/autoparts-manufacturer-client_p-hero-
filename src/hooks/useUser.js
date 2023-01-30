import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
const useSingleAdmin = () => {
    const [user] = useAuthState(auth);
    const [SingleAdmin, setSingleAdmin ] =useState([]);

    useEffect(() => {
        const url =`https://auto-server-o5cy.onrender.com/admin/${user.email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setSingleAdmin (data))
      
    }, [SingleAdmin])
    

    return [SingleAdmin, setSingleAdmin ];

};

export default useSingleAdmin;