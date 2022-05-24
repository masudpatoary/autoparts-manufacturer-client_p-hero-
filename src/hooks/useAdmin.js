import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useAdmin = () => {
    const [user] = useAuthState(auth);
    const [allAdmins, setAllAdmins] = useState([]);
    const [adminexist, setAdminExist] = useState(false)
    useEffect(() => {
        const url = "http://localhost:5000/admin"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllAdmins(data)
            })

    }, [allAdmins])

    const admin = allAdmins.find(async u => {
        if (await u.email === user.email) {
            return setAdminExist(true);
        }
        return
    })

    return [allAdmins, adminexist];

};

export default useAdmin;