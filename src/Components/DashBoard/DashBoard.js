import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

import { RiMenuAddFill } from 'react-icons/ri';
import AddParts from './Admin/AddParts/AddParts';

const DashBoard = () => {
  const dashBoardMenu =
    <>
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/dashboard/profile">My Profile</Link></li>
      <li><Link to="/dashboard/orders">My Orders</Link></li>
      <li><Link to="/dashboard/review">My Reviews</Link></li>
      <li><label for="add-parts-modal" class="">Add New Parts</label></li>
      <li><Link to="/dashboard/manageorders">Manage All Orders</Link></li>
      <li><Link to="/dashboard/manageparts">Manage All Parts</Link></li>
      <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
    </>

  return (
    <div>

      <h1 className='text-center'>Dashboard</h1>
      <div className='mx-8'>
        <label tabIndex="1" for="openDashboard" class="lg:hidden cursor-pointer "><RiMenuAddFill /></label>
      </div>
      <Outlet></Outlet>

      <div class="drawer drawer-mobile">

        <input id="openDashboard" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          {/* <!-- Page content here --> */}


        </div>
        <div class="drawer-side">
          <label for="openDashboard" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-68 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {
              dashBoardMenu
            }
          </ul>

        </div>
      </div>
      <AddParts></AddParts>
    </div>

  );
};

export default DashBoard;