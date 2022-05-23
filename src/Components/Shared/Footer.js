import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Footer = () => {
    const [user] = useAuthState(auth);
    return (
        <footer class="footer mt-auto px-10 py-5 bg-base-300 justify-center items-center">
            <div>
                <ul class="flex w-64 font-bold">
                    <li className='px-2'><Link to='/home'>Home</Link></li>
                    <li className='px-2'><Link to='/about'>About</Link></li>
                    <li className='px-2'><Link to='/blog'>Blog</Link></li>
                    {
                        user ? <li className='px-2'><Link to='/dashboard'>Dash Board</Link></li>: ''
                    }
                </ul>
            </div>
            <div class="grid grid-flow-col gap-4 text-xl  mx-auto">
                <FaFacebook />
                <FaTwitter />
                <FaYoutube />
            </div>
        </footer>
    );
};

export default Footer;