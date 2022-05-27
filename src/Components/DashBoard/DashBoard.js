import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

import { CgMenuGridO } from 'react-icons/cg';
import AddParts from './Admin/AddParts/AddParts';
import useAdmin from '../../hooks/useAdmin';
import ProfileUpdate from './Admin/Profile/ProfileUpdate';
import AddReviews from './User/AddReviews';

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [allAdmins, adminexist] = useAdmin();

  const dashBoardMenu =
    <>
      {/* <!-- Sidebar content here --> */}
      {adminexist && <li className='font-bold ml-2 '>Admin Section</li>}

      {adminexist ?
        <>

          <li><Link to="/dashboard/myprofile">My Profile</Link></li>
          <li><label for="add-review-modal">Add New Parts</label></li>
          <li><Link to="/dashboard/manageorders">Manage All Orders</Link></li>
          <li><Link to="/dashboard/manageparts">Manage All Parts</Link></li>
          <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
        </>
        :
        <>
          <li><Link to="/dashboard/myorders">My Orders</Link></li>
          <li>My Reviews</li>
          <li><Link to="/dashboard/myreview">My Reviews</Link></li>
          <li><label for="add-review-modal">Add Reviews</label></li>
        </>
      }
    </>

  return (
    <div>
      <div className='mx-8'>
        <label tabIndex="1" for="openDashboard" className="lg:hidden cursor-pointer text-2xl"><CgMenuGridO /></label>
      </div>
      <h1 className='text-center font-bold mx-10 text-2xl'>Dashboard</h1>
      <div className="drawer drawer-mobile">
        <input id="openDashboard" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label for="openDashboard" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-68 bg-base-100 text-left text-base-content">
            {/* <!-- Sidebar content here --> */}
            {
              dashBoardMenu
            }
          </ul>
        </div>
      </div>
      <AddReviews></AddReviews>
      <AddParts></AddParts>
      <ProfileUpdate />
    </div>

  );
};

export default DashBoard;