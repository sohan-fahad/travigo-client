import React from 'react';
import Services from '../../Services/Services';
import Contact from '../Contact/Contact';
import HeroBox from '../HeroBox/HeroBox';
import About from '../About/About'

const Home = () => {
    return (
        <div>
            <HeroBox></HeroBox>
            <Services></Services>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;