import React from 'react';
import Countries from '../compenents/Countries';
import Logo from '../compenents/Logo';
import Navigation from '../compenents/Navigation';

const Home = () => {
    return (
        <div>
            <Logo></Logo>
            <Navigation></Navigation>
            <Countries></Countries>
        </div>
    );
};

export default Home;