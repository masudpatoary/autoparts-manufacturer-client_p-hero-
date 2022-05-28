import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useAdmin = () => {
    const [user] = useAuthState(auth);
    const [allAdmins, setAllAdmins] = useState([]);
    const [adminexist, setAdminExist] = useState(false)
    useEffect(() => {
        const url = "https://vast-sands-13931.herokuapp.com/admin"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllAdmins(data)
                if (data?.email === user?.email) {
                    return setAdminExist(true);
                }
                return
            })

    }, [allAdmins])

    const admin = () => allAdmins.find(async u => {
        if (await u.email === user.email) {
            // console.log(u.email)
            // console.log(user.email)
            return setAdminExist(true);
        }
        return
    })
    admin()
    return [allAdmins, adminexist];

};

export default useAdmin;