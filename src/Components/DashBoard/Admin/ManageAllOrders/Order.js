import React from 'react';

const Order = ({ order, index }) => {
    const { clientName,clientEmail, partsName, model, imgUrl, price, orderqty, paymentStutus, shippingStutus } = order
    return (
        <tr className=' text-center'>
            <th>{index + 1}</th>
            <td>
                <div  className="w-16">
                    <img src={imgUrl} alt={partsName} />
                </div>
            </td>
            <td>{partsName}</td>
            <td>{model}</td>
            <td>{orderqty}</td>
            <td>{clientName}</td>
            <td>{clientEmail}</td>
            <td>{price}</td>
            <td>{paymentStutus}</td>
            <td>
                <label onClick={() => console.log(order)} for="delete-confirm-modal"  className="btn btn-xs btn-error">{shippingStutus}</label>
            </td>
        </tr>
    );
};

export default Order;