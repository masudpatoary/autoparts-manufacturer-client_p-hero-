import React from 'react';
import { useForm } from "react-hook-form";

const Admin = ({ user, index }) => {
    const { imgUrl, name, email, userType, _id } = user
    const userData = (imgUrl, name, email, userType)
    const { register, getValues, handleSubmit } = useForm();

    const admin = "Admin"
    const userDb = getValues('userType')
    const adminChosen = admin === userDb
    const onSubmit = async data => {

        console.log(userDb, data,)

        if (adminChosen) {
            await fetch('http://localhost:5000/admin', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({userData})
            })
                .then(res => res.json())
                .then(result => {
                    console.log('Admin Chossen', result);

                })
        }
        else{
            await fetch(`http://localhost:5000/user/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    console.log('User Updated', result);
    
                })
        }


    };
    return (
        <tr className=' text-center'>
            <th>0{index + 1}</th>
            <td>
                <div className="w-16">
                    <img src={imgUrl} alt={name} />
                </div>
            </td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{userType}</td>
            <td>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <select {...register("userType")} className="select select-bordered select-sm w-20 max-w-xs">
                        <option >User</option>
                        <option >Admin</option>
                    </select><br />
                    <input type="submit" value='Confirm' className='btn btn-xs btn-warning mt-2' />
                </form>
            </td>
            {/* <td>
                <label onClick={() => console.log(user)} for="delete-confirm-modal"  className="btn btn-xs btn-error">{userType}</label>
            </td> */}
        </tr>
    );
};

export default Admin;