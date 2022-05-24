import React from 'react';
import useOrders from '../../../../hooks/useOrders';
import Order from './Order';

const ManageAllOrders = () => {
    const [orders] = useOrders()
    return (
        <div>
            <h1 className='text-center text-xl font-bold my-2'>Currently Available Parts</h1>
            <div className='w-100 flex flex-wrap p-md-5 p-sm-2 justify-center '>
                <table  className="table w-full overflow-x-auto">
                    <thead>
                        <tr className=' text-center'>
                            <th></th>
                            <th className='sm:hidden'>Image</th>
                            <th>Parts Name</th>
                            <th className='sm:hidden'>Parts Model</th>
                            <th>Order QTY</th>
                            <th>Client</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Payment Stutus</th>
                            <th>Shipping Stutus</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <Order
                                key={order._id}
                                index={index}
                                order={order}
                            ></Order>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;