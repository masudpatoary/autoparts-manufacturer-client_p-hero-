import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Parts = ({ parts, index }) => {
    const { name, model, imgUrl, price, minOrderQty, inStockQty, _id } = parts
    const navigate = useNavigate()
    const handleDeleteParts = async id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/autoparts/${id}`;
            await fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
            // toast(`successfully deleted ${name}`)
        }
        // navigate('/inventories');

    }



    return (
        <tr className=' text-center'>
            <th>{index + 1}</th>
            <td className='md:hidden'>
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
                <label onClick={() =>handleDeleteParts(_id)} for="delete-confirm-modal"  className="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default Parts;