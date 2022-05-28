import React from 'react';
import { CgFileDocument } from 'react-icons/cg';
import { AiOutlineInteraction } from 'react-icons/ai';
import { BsGear } from 'react-icons/bs';

const WhyWeBest = () => {
    const items = [
        {
            icon: <CgFileDocument />,
            title: "Certificates",
            detail: "IATF16949 ISO13485 Certified"
        },
        {
            icon: <AiOutlineInteraction />,
            title: "Fast Delivery",
            detail: "All metal parts are supported with a fast delivery service."
        },
        {
            icon: <BsGear />,
            title: "After-service",
            detail: "Overseas factory can provide the local production"
        }
    ]

    return (
        <div className='md:w-4/5 mx-auto'>
            <div >
                <h2 className='font-bold text-5xl text-center'>Why AutoParts is the best Car Parts Manufacturer And Supplier Choice?</h2>
            </div>
            <div className='flex flex-wrap my-10 justify-center'>
                {
                    items.map((item) =>
                        <div className='text-center m-5 shadow-xl px-4 py-6 sm:w-full md:w-60'>
                            <p className="flex justify-center text-orange-500 font-bold text-5xl">{item.icon}</p>
                            <p className="my-5 font-bold text-2xl">{item.title}</p>
                            <p className="text-lg font-bold">{item.detail}</p>
                        </div>)
                }
            </div>

        </div>
    );
};

export default WhyWeBest;