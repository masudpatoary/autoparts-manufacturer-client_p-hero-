import React from 'react';
import AllParts from './AllParts.js/AllParts';
import Banner from './Banner';
import OrgSummary from './OrgSummary/OrgSummary';
import Reviews from './Reviews/Reviews';
import WhyWeBest from './WhyWeBest';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllParts></AllParts>
            <OrgSummary></OrgSummary>
            <WhyWeBest />
            <Reviews></Reviews>
        </div>
    );
};

export default Home;