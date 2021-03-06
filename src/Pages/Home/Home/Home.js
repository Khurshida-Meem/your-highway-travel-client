import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Divider from '../Divider/Divider';
import Goals from '../Goals/Goals';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Goals></Goals>
            <Divider></Divider>
            <Footer></Footer>
        </div>
    );
};

export default Home;