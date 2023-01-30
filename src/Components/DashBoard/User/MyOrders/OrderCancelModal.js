import React from 'react';
import { toast } from 'react-toastify';

const OrderCancelModal = ({ props }) => {

    const orderid = props?.id
    const cancelOrder = async () => {
        console.log(await orderid)
        const url = `https://auto-server-o5cy.onrender.com/order/${orderid}`;
        await fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        toast(`your order ${props?.partsName} successfully canceled `)

        // navigate('/inventories');
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6"  className="modal-toggle" />
            <div  className="modal modal-bottom sm:modal-middle">
                <div  className="modal-box">
                    <h3  className="font-bold text-lg">Congratulations random Interner user!</h3>
                    <p  className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div  className="modal-action">
                        <button onClick={cancelOrder}><label for="my-modal-6"  className="btn">Yay!</label></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCancelModal;