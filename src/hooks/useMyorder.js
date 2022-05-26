import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../Components/Shared/Loading';
import auth from '../firebase.init';
import useOrders from './useOrders';

const useMyorder = () => {
    const [user] = useAuthState(auth);
    // const [orders] = useOrders()


    const email = 'masudpatoary@gmail.com'
    const url = `http://localhost:5000/myorder/${email}`
    const { data, isLoading, refetch } = useQuery(['available'], () => fetch(url)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    // if (error) {
    //     return <p>{error}</p>
    // }

    // const id = orders?._id
    // useEffect(() => {
    //     const url = `http://localhost:5000/myorder/${email}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(async data => setMyOrder(await data))

    // }, [])


    return [data];

};

export default useMyorder;