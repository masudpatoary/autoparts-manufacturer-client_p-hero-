import React from 'react';

const Parts = ({ parts, index }) => {
    const { name, model, imgUrl, price, minOrderQty, inStockQty } = parts
    return (
        <tr className=' text-center'>
            <th>{index + 1}</th>
            <td>
                <div  className="w-16">
                    <img src={imgUrl} alt={name} />
                </div>
            </td>
            <td>{name}</td>
            <td>{model}</td>
            <td>{minOrderQty}</td>
            <td>{inStockQty}</td>
            <td>{price}</td>
            <td>
                <label onClick={() =>console.log(parts)} for="delete-confirm-modal"  className="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default Parts;