import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='w-4/5 mx-auto '>
            <div className='my-5'>
                <h1 className='font-bold text-4xl mb-5'>How will you improve the performance of a React Application?</h1>
                <p className='text-2xl'>How will you improve the performance of a React Application?</p>
            </div>

            <div className='my-5'>
                <h1 className='font-bold text-4xl mb-5'>What are the different ways to manage a state in a React application?</h1>
                <p className='text-2xl'>How will you improve the performance of a React Application?</p>
            </div>

            <div className='my-5'>
                <h1 className='font-bold text-4xl mb-5'>How does prototypical inheritance work?</h1>
                <p className='text-2xl'>How will you improve the performance of a React Application?</p>
            </div>

            <div className='my-5'>
                <h1 className='font-bold text-4xl mb-5'> Why you do not set the state directly in React. </h1>
                <p className='text-2xl'>How will you improve the performance of a React Application?</p>
            </div>

            <div className='my-5'>
                <h1 className='font-bold text-4xl mb-5'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <p className='text-2xl'>How will you improve the performance of a React Application?</p>
            </div>
            
            <div className='my-5'>
                <h1 className='font-bold text-4xl mb-5'>What is a unit test? Why should write unit tests?</h1>
                <p className='text-2xl'>How will you improve the performance of a React Application?</p>
            </div>
        </div>
    );
};

export default Blog;