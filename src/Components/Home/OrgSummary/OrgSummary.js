import React from 'react';
import useOrgDetail from '../../../hooks/useOrgDetail';
import Summary from './Summary';

const OrgSummary = () => {
    const [orgDetail] = useOrgDetail()
    return (
        <div className='my-10'>
            <p className='font-bold text-5xl text-center mb-4'>Millions Business Trusts Us</p>
            <div className='flex justify-center items-center'>
                {
                    orgDetail.map(detail => <Summary
                        key={detail._id}
                        img={detail.imgUrl}
                        number={detail.numbers}
                        quote={detail.qoute}
                    ></Summary>)
                }
            </div>
        </div>
    );
};

export default OrgSummary;