import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css'

const About = () => {
    return (
        <>
            <Container id="contact">
                <h1 className="text-center contact-title">CONTACT US</h1>
                <div className="contact-container">
                    <div className="form-container">
                        <form>
                            <input type="text" required placeholder="Name"/>
                            <input type="email" required placeholder="Subject" required />
                            <textarea type="text" placeholder="Message..."  required/>
                            <input type="submit" value="SEND MESSAGE" />
                        </form>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default About;