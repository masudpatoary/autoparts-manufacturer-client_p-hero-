import React from 'react';
import AllParts from './AllParts.js/AllParts';
import Banner from './Banner';
import OrgSummary from './OrgSummary/OrgSummary';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllParts></AllParts>
            <OrgSummary></OrgSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;