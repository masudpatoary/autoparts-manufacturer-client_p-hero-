import React from 'react';
import useParts from '../../../../hooks/useParts';
import Parts from './Parts';

const ManageAllParts = () => {
    const [autoparts] = useParts()
    return (
        <div>
            <h1 className='text-center text-xl font-bold my-2'>Currently Available Parts</h1>
            <div className='w-100 flex flex-wrap p-md-5 p-sm-2 justify-center '>
                <table  className="table w-full">
                    <thead>
                        <tr className=' text-center'>
                            <th></th>
                            <th>Image</th>
                            <th>Parts Name</th>
                            <th>Parts Model</th>
                            <th>Min. Order QTY</th>
                            <th>In Stock QTY</th>
                            <th>price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            autoparts.map((parts, index) => <Parts
                                key={parts._id}
                                index={index}
                                parts={parts}
                            ></Parts>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllParts;