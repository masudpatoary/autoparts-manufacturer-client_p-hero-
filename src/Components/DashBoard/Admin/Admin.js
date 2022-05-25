import React from 'react';
import { useForm } from "react-hook-form";

const Admin = ({ user, index }) => {
    const { imgUrl, name, email, userType } = user
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
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
                    </select><br/>
                    <input type="submit" value='Confirm' className='btn btn-xs btn-warning mt-2'/>
                </form>
            </td>
            {/* <td>
                <label onClick={() => console.log(user)} for="delete-confirm-modal"  className="btn btn-xs btn-error">{userType}</label>
            </td> */}
        </tr>
    );
};

export default Admin;