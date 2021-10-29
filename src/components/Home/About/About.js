import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'
import logo from '../../../images/TRAVIGO.png'

const About = () => {
    return (
        <div id="about">
            <Container>
                <h1 className="about-title">ABOUT TRAVIGO</h1>
                <div className="about">
                    <div className="about-img">
                        <img src={logo} alt="" className="img-fluid" />
                    </div>
                    <div classsName="about-us">
                        <p>
                            Travigo is a private retailer or public service that provides travel and tourism-related services to the general public on behalf of accommodation or travel suppliers to offer different kinds of travelling packages for each destination. Travel agencies can provide outdoor recreation activities, airlines, car rentals, cruise lines, hotels, railways, travel insurance, package tours, insurance, guide books, VIP airport lounge access, arranging logistics for luggage and medical items delivery for travellers upon request, public transport timetables, car rentals, and bureau de change services.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;