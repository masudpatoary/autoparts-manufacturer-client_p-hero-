import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useUsers from '../../../hooks/useUsers';
import ProfileUpdate from './ProfileUpdate';
const Profile = () => {
    const [user] = useAuthState(auth);
    const [dbUser] =useUsers()
    return (
        <div class="card w-96 drop-shadow-lg mx-auto my-5">
            <div class="card-body bg-base-200">
                <h2 className='font-bold text-lg mb-5'>My Profile</h2>
                {user.photoURL &&
                    <div class="avatar flex justify-center">
                        <div class="w-24 rounded-full ">
                            <img src={user.photoURL} classNamew='' alt="" />
                        </div>
                    </div>
                }
                {/* <p>Name: {user.displayName}</p>
                
                <p>Email: {user.email}</p> */}
                <p>Name: {dbUser?.name || user.displayName}</p>
                <p>Email: {dbUser?.email || user.email}</p>
                
                    <button className='btn btn-outline btn-primary btn-sm mt-16 w-32 text-sm'
                        onClick={async () => console.log('await user')}>
                        <label for="profileupdate">Edit Profile</label></button>
                
            </div>
            
        </div>
    );
};

export default Profile;