import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { HiMenuAlt1 } from 'react-icons/hi';



const NavBar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };
    const navMenuItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {user ? <>
            <li><Link to='/dashboard'>Dash Board</Link></li>
            <li onClick={logout}> <Link to=''>Sign Out</Link></li>
        </> :
            <>
                <li><Link to='/signin'>Sign In</Link></li>
                <li><Link to='/signup'>Sign Up</Link></li>
            </>}
    </>

    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost text-2xl lg:hidden">
                        <HiMenuAlt1 />
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenuItems}
                    </ul>
                </div>

                <div>
                    <p className="btn btn-ghost normal-case font-bold text-center text-xl"><a >Valey Auto Parts</a></p>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                   {navMenuItems}
                </ul>

            </div>

        </div>
    );
};

export default NavBar;