import React from 'react';
import useUsers from '../../../hooks/useUsers';
import Admin from './Admin';

const MakeAdmin = () => {
    const [users, setUsers] = useUsers()
    return (
        <div>
            <h1 className='text-center text-xl font-bold my-2'>Currently Available Parts</h1>
            <div className='w-100 flex flex-wrap p-md-5 p-sm-2 justify-center '>
                <table className="table w-full">
                    <thead>
                        <tr className=' text-center'>
                            <th>Sl.</th>
                            <th>Image</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>User Type</th>
                            <th>Take Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <Admin
                                key={user._id}
                                index={index}
                                user={user}
                            ></Admin>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;