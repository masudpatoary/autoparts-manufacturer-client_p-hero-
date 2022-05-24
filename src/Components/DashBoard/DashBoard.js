import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

import { RiMenuAddFill } from 'react-icons/ri';
import AddParts from './Admin/AddParts/AddParts';
import useAdmin from '../../hooks/useAdmin';

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [allAdmins, adminexist] = useAdmin();
  const a = async () => {
    console.log(await adminexist)
    console.log(user.email)
  }
  const dashBoardMenu =
    <>
      {/* <!-- Sidebar content here --> */}
      <li onClick={a}>admin</li>
      <li><Link to="/dashboard/myprofile">My Profile</Link></li>

      {adminexist ?
        <><li><label for="add-parts-modal" className="">Add New Parts</label></li>
          <li><Link to="/dashboard/manageorders">Manage All Orders</Link></li>
          <li><Link to="/dashboard/manageparts">Manage All Parts</Link></li>
          <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
        </>
        :
        <>

          <li><Link to="/dashboard/myorders">My Orders</Link></li>
          <li><Link to="/dashboard/myreview">My Reviews</Link></li>
        </>
      }

    </>

  return (
    <div>


      <div className='mx-8'>
        <label tabIndex="1" for="openDashboard" className="lg:hidden cursor-pointer "><RiMenuAddFill /></label>
      </div>


      <div className="drawer drawer-mobile">

        <input id="openDashboard" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <h1 className='text-Left font-bold text-2xl'>Dashboard</h1>
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
      <AddParts></AddParts>
    </div>

  );
};

export default DashBoard;