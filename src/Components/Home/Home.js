import React from 'react';
import AllParts from './AllParts.js/AllParts';
import Banner from './Banner';
import CustomOrder from './CustomOrder';
import OrgSummary from './OrgSummary/OrgSummary';
import Reviews from './Reviews/Reviews';
import WhyWeBest from './WhyWeBest';

const Home = () => {
    return (
        <div>
            <Banner />
            <AllParts />
            <OrgSummary />
            <WhyWeBest />
            <Reviews />
            <CustomOrder />
        </div>
    );
};

export default Home;