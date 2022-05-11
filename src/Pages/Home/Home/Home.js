import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Review from '../Review/Review';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Review></Review>
            <About></About>
        </div>
    );
};

export default Home;