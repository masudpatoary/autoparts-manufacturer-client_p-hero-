import React from 'react';
import { Link, Outlet } from 'react-router-dom';



const Blog = () => {

    // const products = [
    //     { id: 1, name: 'samsung', price: 10, description: 'lorem ipsum' },
    //     { id: 2, name: 'samsung', price: 20, description: 'lorem ipsum' },
    //     { id: 3, name: 'Oppo', price: 8, description: 'lorem ipsum' },
    //     { id: 4, name: 'Oppo', price: 15, description: 'lorem ipsum' },
    //     { id: 5, name: 'Apple', price: 30, description: 'lorem ipsum' },
    //     { id: 6, name: 'Apple', price: 40, description: 'lorem ipsum' }
    // ]

    // const searchProductByName = products.find(product => {

    //     return product.name === 'samsung'
    // })

    // console.log(searchProductByName)

    return (
        <div className='w-4/5 mx-auto '>
            <div className='mb-16 mt-5'>
                <h1 className='font-bold text-4xl mb-5'>How will you improve the performance of a React Application?</h1>
                <p className='text-2xl font-bold'>Few ways to improve the performance of a React Application?</p>
                <ul className='text-lg list-disc px-16 list-disc px-16'>
                    <li>Keeping component state local where necessary</li>
                    <li>Memoizing React components to prevent unnecessary re-renders</li>
                    <li>Code-splitting in React using dynamic import()</li>
                    <li>Windowing or list virtualization in React</li>
                    <li>React performance tuning by fixing unnecessary rendering of components in React</li>
                    <li>Have to make sure that components receive only necessary props. It will reduce CPU consumption and avoid over-rendering unnecessary features.</li>
                </ul>
            </div>

            <div className='my-16'>
                <h1 className='font-bold text-4xl mb-5'>What are the different ways to manage a state in a React application?</h1>
                <p className='text-2xl font-bold'>Here are different ways to manage a state</p>
                <ul className='text-lg list-disc px-16'>
                    <li><span className='font-bold'>React Hooks:</span> Hooks helps extract stateful logic from a component so it can be tested independently and reused.</li>
                    <li><span className='font-bold'>Context API:</span> Context provides a way to pass data through the component tree without having to pass props down manually at every level.</li>
                    <li><span className='font-bold'>Use Data Fetching Libraries:</span> There are many data fatching libraries, like React Query. It is  most basic and simple form being used to fetch the server stats.</li>
                </ul>
            </div>

            <div className='my-16'>
                <h1 className='font-bold text-4xl mb-5'> Why you do not set the state directly in React. </h1>
                <p className='text-2xl font-bold'>We should not not the state directly in React becaus of the following reason: </p>
                <ul className='text-lg list-disc px-16'>
                    <li>If anyone update it directly, calling the setState() afterward, may just replace the update that has been made.</li>
                    <li>Will lose control of the state across all components.</li>
                    <li>If you try to update state directly then it won't re-render the component.</li>
                </ul>
            </div>

            <div className='my-16'>
                <h1 className='font-bold text-4xl mb-5'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <p className='text-2xl'>

                    const products = &#91;<br />	
                    <span className='text-secondary'>&#123;</span><span className='text-primary'>id</span>: 1, <span className='text-primary'>name</span>: 'samsung', <span className='text-primary'>price</span>: 10, 
                    <span className='text-primary'>description</span>: 'lorem ipsum' <span className='text-secondary'>&#125;</span>,<br />	

                    <span className='text-secondary'>&#123;</span><span className='text-primary'>id</span>: 2, <span className='text-primary'>name</span>: 'samsung', <span className='text-primary'>price</span>: 20, <span className='text-primary'>description</span>: 'lorem ipsum' <span className='text-secondary'>&#125;</span>,<br />	

                    <span className='text-secondary'>&#123;</span><span className='text-primary'>id</span>: 3, <span className='text-primary'>name</span>: 'Oppo', <span className='text-primary'>price</span>: 8, <span className='text-primary'>description</span>: 'lorem ipsum' <span className='text-secondary'>&#125;</span>,<br />	

                    <span className='text-secondary'>&#123;</span><span className='text-primary'>id</span>: 4, <span className='text-primary'>name</span>: 'Oppo', <span className='text-primary'>price</span>: 15, <span className='text-primary'>description</span>: 'lorem ipsum' <span className='text-secondary'>&#125;</span>,<br />	

                    <span className='text-secondary'>&#123;</span><span className='text-primary'>id</span>: 5, <span className='text-primary'>name</span>: 'Apple', <span className='text-primary'>price</span>: 30, <span className='text-primary'>description</span>: 'lorem ipsum' <span className='text-secondary'>&#125;</span>,<br />	

                    <span className='text-secondary'>&#123;</span><span className='text-primary'>id</span>: 6, <span className='text-primary'>name</span>: 'Apple', <span className='text-primary'>price</span>: 40, <span className='text-primary'>description</span>: 'lorem ipsum' <span className='text-secondary'>&#125;</span><br />	
                    &#93;	<br />	

                    const searchProductByName = products.find&#40;product => <span className='text-secondary'>&#123;</span><br />	
        
                    <span className='text-primary'>return</span> product.name === 'samsung'<br />	
                        <span className='text-secondary'>&#125;</span>&#41;<br />	
                </p>
            </div>

            <div className='my-16'>
                <h1 className='font-bold text-4xl mb-5'>What is a unit test? Why should write unit tests?</h1>
                <p className='text-2xl font-bold'>What unit test is</p>
                <p className='px-16'>In computer programming, unit testing is a software testing method by which individual units of source code—sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures—are tested to determine whether they are fit for use.</p>
                <p className='text-2xl font-bold'>Purpose of writing unit test</p>
                <ul className='text-lg list-disc px-16'>
                    <li>To provide the documentation of the entire system. </li>
                    <li>The benefits of unit tests is that they isolate a function, class or method and only test that piece of code</li>
                    <li>Unit tests code will have fewer defects, which means fewer bug fixes, for faster project completion. Which means cost reduction</li>
                </ul>
            </div>
        </div>
    );
};

export default Blog;