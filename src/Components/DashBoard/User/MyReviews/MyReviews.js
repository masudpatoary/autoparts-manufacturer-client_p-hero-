import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../../firebase.init';
import useSingleAdmin from '../../../../hooks/useUser';
import Loading from '../../../Shared/Loading';
import Myreview from './MyReview';

const MyReviews = () => {
    const [user] = useAuthState(auth);
    const [users] = useSingleAdmin()

    const userEmail = user?.email
    const userEmailFromDB = users?.email
    const email = userEmail || userEmailFromDB
    const url = `http://localhost:5000/myreview/${email}`
    const { data, isLoading, refetch } = useQuery(['available'], () => fetch(url)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        
        <div classemail='mt-10'>
            <h1 className='text-center text-xl font-bold my-2'>All your order list</h1>
            <div className='w-100 md:flex flex-wrap p-md-5 p-sm-2 justify-center '>
                
                {
                    data?.map( order => <Myreview
                         key={order._id}
                         name={order.name}
                         partsName={order.partsName}
                         rating={order.rating}
                         details={order.details}
                         email={order._id}
                    ></Myreview>)
                }
            </div>
        </div>
    );
};

export default MyReviews;