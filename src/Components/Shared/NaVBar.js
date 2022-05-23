import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { RiMenuAddFill } from 'react-icons/ri';




const NavBar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    return (
        <div class="navbar bg-base-100 flex justify-between">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
                    </ul>
                </div>

                <div>
                    <p className="btn btn-ghost normal-case font-bold text-center text-xl"><a >Valey Auto Parts</a></p>
                </div>
            </div>

            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
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
                </ul>

            </div>
            <div>
                <label tabIndex="1" for="openDashboard" class="btn btn-active btn-ghost drawer-button lg:hidden"><RiMenuAddFill /></label>
            </div>
        </div>
    );
};

export default NavBar;