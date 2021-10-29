import React from 'react';
import { Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <Container>
                <div className="footer">
                    <div className="location-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58403.62358074509!2d90.3272609227238!3d23.810544424183007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c102e2ece5bb%3A0x446e9dc895326a70!2sBangladesh%20National%20Zoo%2C%20Mirpur!5e0!3m2!1sen!2sbd!4v1635478822329!5m2!1sen!2sbd" width="250" height="150" loading="lazy">
                        </iframe>
                    </div>
                    <div className="address-details">
                        <h5>MIRPUR OFFICE</h5>
                        <p>#D Block, Ruppur</p>
                        <p>Ghorwarhat, 1229</p>
                        <p>Mirpur 11/2, Dhaka</p>
                        <p>0123456789</p>
                    </div>
                    <div className="address-details">
                        <h5>BANAREE OFFICE</h5>
                        <p>#F Block, Banasree</p>
                        <p>Forayezi Hospital, 1220</p>
                        <p>Rampura, Dhaka</p>
                        <p>0123456789</p>
                    </div>
                    <div className="footer-nav">
                        <ul>
                            <li as={HashLink} to="/home#home">HOME</li>
                            <li as={HashLink} to="/home#service">SERVICE</li>
                            <li>ABOUT</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;