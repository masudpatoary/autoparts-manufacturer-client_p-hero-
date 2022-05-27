import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../../firebase.init';
import useSingleAdmin from '../../../../hooks/useUser';
import Loading from '../../../Shared/Loading';
import Order from './Order';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [users] = useSingleAdmin()

    const userEmail = user?.email
    const userEmailFromDB = users?.email
    const email = userEmail || userEmailFromDB
    const url = `http://localhost:5000/myorder/${email}`
    const { data, isLoading, refetch } = useQuery(['available'], () => fetch(url)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        
        <div className='mt-10'>
            <h1 className='text-center text-xl font-bold my-2'>All your order list</h1>
            <div className='w-100 flex flex-wrap p-md-5 p-sm-2 justify-center '>
                
                {
                    data?.map( order => <Order
                         key={order._id}
                        id={order._id}
                        model={order.model}
                        partsName={order.partsName}
                        price={order.price}
                        totalprice={order.totalprice}
                        orderqty={order.orderqty}
                        shippingStutus={order.shippingStutus}
                        address={order.address}
                        phoneNumber={order.phoneNumber}
                        clientEmail={order.clientEmail}
                        clientName={order.clientName}
                        paymentStutus={order.paymentStutus}
                    ></Order>)
                }
            </div>
        </div>
    );
};

export default MyOrders;