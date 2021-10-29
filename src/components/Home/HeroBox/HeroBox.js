import React from 'react';
import { Container } from 'react-bootstrap';
import './Herobox.css'

const HeroBox = () => {
    return (
        <div className="hero-box" id="home">
            <Container>
                <h1>BECOME AN EXPLORER</h1>
                <h1>TO GET THE STARTED</h1>
                <h5>Discover The Places & Experience The Beautiful Journy</h5>
            </Container>
        </div>
    );
};

export default HeroBox;