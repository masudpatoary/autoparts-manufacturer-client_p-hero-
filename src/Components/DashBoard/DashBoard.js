import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const dashBoardMenu =
    <>
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/dashboard/profile">My Profile</Link></li>
      <li><Link to="/dashboard/orders">My Orders</Link></li>
      <li><Link to="/dashboard/review">My Reviews</Link></li>

      <li><Link to="/dashboard/addnewparts">Add New Parts</Link></li>
      <li><Link to="/dashboard/manageorders">Manage All Orders</Link></li>
      <li><Link to="/dashboard/manageparts">Manage All Parts</Link></li>
      <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
    </>

  return (
    <div>
      <h1>Dashboard</h1>
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
    </div>

  );
};

export default DashBoard;