import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import useSingleAdmin from '../../../../hooks/useSingleAdmin';
import ProfileUpdate from './ProfileUpdate';
const Profile = () => {
    const [user] = useAuthState(auth);
    const [SingleAdmin] = useSingleAdmin()
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
                <p>Name: {SingleAdmin?.name || user.displayName}</p>
                <p>Primary Email: {SingleAdmin?.email || user.email}</p>
                <p>Secondery Email: {SingleAdmin?.seconderyEmail}</p>

                <button className='btn btn-outline btn-primary btn-sm mt-16 w-32 text-sm'
                    onClick={async () => console.log('await user')}>
                    <label for="profileupdate">Edit Profile</label>
                </button>

            </div>

        </div>
    );
};

export default Profile;